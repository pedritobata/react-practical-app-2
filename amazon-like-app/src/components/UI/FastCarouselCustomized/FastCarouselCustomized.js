// Este codigo fue bajado del repo de reac-fast-carousel by moarwick
//Luego yo lo he modificado para customizarlo

import React, { PureComponent, useState } from 'react'
import PropTypes from 'prop-types'
import IconChevronRight from './IconChevronRight'
import IconChevronLeft from './IconChevronLeft'
import { getNextTween, throttleEvent } from './utils'

//agregados por mi
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Easing funs
const easeInOutQuad = t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
const easeOutQuad = t => t * (2 - t)

/**
 * NavPane
 */
const NavPane = ({ color, iconColor, left, onClick, size, externalPadding, myStyles, isLeftNav, isRightNav }) => {
  /* const leftPct = left ? 0 : 100 - size */
  const leftPct = left ? externalPadding : `calc(100% - 40px - ${externalPadding})`
  const navStyles = {
    ...styles.navPane,
    ...myStyles,
    backgroundColor: "white",
    height: "6.3rem",
    top: "25%",
    left: `${leftPct}`,
    width: `40px`,
    boxShadow: "0 1px 3px #888",
  }

  const arrowNormalColor = "#696969";
  const arrowHoverColor = "#3D3D3D";

  const [arrowColor, setArrowColor] = useState(arrowNormalColor);

  const arrowContainerLeft = {
    "clip":"rect(-10px,60px,120px,0)",
    borderRadius: "0 3px 3px 0",
    opacity: `${isLeftNav ? '1' : '0.35'}`
  }

  const arrowContainerRight = {
    "clip":"rect(-10px, 40px,120px, -10px)",
    borderRadius: "3px 0 0 3px",
    opacity: `${isRightNav ? '1' : '0.35'}`
  }

  const arrowContainerFinal = left ? arrowContainerLeft : arrowContainerRight;

  return (
    <a href="" onClick={onClick} style={{...navStyles, ...arrowContainerFinal}}
     onMouseOver={() => setArrowColor(arrowHoverColor)}
     onMouseLeave={() => setArrowColor(arrowNormalColor)}>
     {/*  {left && <IconChevronLeft color={iconColor} style={styles.chevronIcon} />}
      {!left && <IconChevronRight color={iconColor} style={styles.chevronIcon} />} */}

      {left && <FontAwesomeIcon icon={faAngleLeft} style={{fontSize: "2.3rem",
    color: arrowColor,}}/>}
      {!left &&  <FontAwesomeIcon icon={faAngleRight} style={{fontSize: "2.3rem",
    color: arrowColor,}}/>}
    </a>
  )
}

/**
 * ScrollbarCarousel
 */
export default class ScrollbarCarousel extends PureComponent {
  static propTypes = {
    navColor: PropTypes.string,
    navIconColor: PropTypes.string,
    navInset: PropTypes.bool,
    navSize: PropTypes.number,
    slideNum: PropTypes.number,
    slides: PropTypes.arrayOf(PropTypes.element),
    slidesShown: PropTypes.number,
    style: PropTypes.object
  }

  static defaultProps = {
    navColor: 'rgba(255,255,255,0.8)',
    navIconColor: '#0275d8',
    navInset: false,
    navSize: 10,
    slideNum: 0,
    slides: [],
    slidesShown: 1,
    style: {}
  }

  constructor(props) {
    super(props)

    this.state = {
      slideNum: 0
    }

    this.el = null
    this.slideWidth = 0
    this.scrollPos = 0
    this.isTweening = false
    this.reqAnimFrame = null
  }

  componentDidMount() {
    throttleEvent('scroll', 'throttledScroll', this.el)
    this.el.addEventListener('throttledScroll', this.setScrollInfo)
    window.addEventListener('resize', this.setScrollInfo, false)
    this.setScrollInfo()
    this.animateToSlide(this.props.slideNum, true)
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.reqAnimFrame)
    this.el.removeEventListener('throttledScroll', this.setScrollInfo)
    window.removeEventListener('resize', this.setScrollInfo, false)
  }

  componentWillUpdate(nextProps) {
    if (nextProps.slideNum !== this.props.slideNum) {
      this.animateToSlide(nextProps.slideNum, true)
    }
  }

  render() {
    if (!this.props.slides || !this.props.slides.length) {
      return null
    }

    const { slideNum } = this.state
    const { navColor, navIconColor, navInset, navSize, slides, slidesShown } = this.props

   /*  const contentStyles = navInset
      ? styles.content
      : { ...styles.content, width: `${100 - navSize * 2}%`, marginLeft: `${navSize}%` } */

    const renderedSlides = this.renderSlides()

    const navProps = { color: navColor, iconColor: navIconColor, size: navSize }
    const isLeftNav = slideNum > 0
    const isRightNav = slideNum < slides.length - slidesShown

    return (
      <div style={{ ...styles.container, ...this.props.style }}>
        <div ref={el => (this.el = el)} style={styles.content}>
          {renderedSlides}
        </div>
    {/*     {isLeftNav && <NavPane {...navProps} left onClick={this.handleNavClick(-1)} />}
        {isRightNav && <NavPane {...navProps} onClick={this.handleNavClick(1)} />} */}

        {<NavPane externalPadding={this.props.externalPadding}
         
          isLeftNav={isLeftNav}
         
         left 
         onClick={this.handleNavClick(-1)} />}
        {<NavPane externalPadding={this.props.externalPadding} 
        
         isRightNav={isRightNav}
        onClick={this.handleNavClick(1)} />}
      </div>
    )
  }

  renderSlides() {
    const { slides, slidesShown } = this.props
    const slideWidth = 100 / slidesShown + '%'

    return slides.map((slide, index) => (
      <span key={index} style={{ ...styles.slideWrapper, width: slideWidth , textAlign: "center"}}>
        {slide}
      </span>
    ))
  }

  /* ----- HANDLERS ----- */

  handleNavClick(dir) {
    return e => {
      e.preventDefault()
      const { slidesShown } = this.props
      const addSlides = this.isTweening ? slidesShown : 0 // increment if user keeps clicking in mid-tween
      const toSlideNum = this.state.slideNum + ((slidesShown + addSlides) * dir)
      this.animateToSlide(toSlideNum)
    }
  }

  /* ----- HELPERS ----- */

  /**
   * Apply "tweening" to el.scrollLeft to smoothly scroll slides to N slide's position
   */
  animateToSlide(slideNum, instant = false) {
    const easingFn = this.isTweening ? easeOutQuad : easeInOutQuad
    const fromPos = this.scrollPos
    const toPos = slideNum * this.slideWidth

    window.cancelAnimationFrame(this.reqAnimFrame)

    if (instant) {
      this.el.scrollLeft = toPos
      return
    }

    let tweenPos = fromPos // init tween value
    const tweenDur = 200 * this.props.slidesShown
    this.isTweening = true

    const animateScroll = () => {
      this.reqAnimFrame = window.requestAnimationFrame(() => {
        const nextTween = getNextTween(tweenPos, fromPos, toPos, tweenDur, easingFn)

        this.el.scrollLeft = nextTween.eased // this also fires a scroll event, thus setScrollInfo()
        tweenPos = nextTween.linear // store linear value for next tween update

        if (nextTween.progress < 1) {
          animateScroll() // call next tween update..
        } else {
          this.isTweening = false // done!
        }
      })
    }

    animateScroll()
  }

  /**
   * Acquire and set sizing & scroll info into instance vars
   * Set current slideNum to state to re-render nav panes
   * Gets run on every "scroll" and "resize" event
   */
  setScrollInfo = () => {
    this.slideWidth = this.el.scrollWidth / this.props.slides.length // current width of individual slide items
    this.scrollPos = this.el.scrollLeft // current scroll position
    const slideNum = Math.floor(this.scrollPos / this.slideWidth + 0.51) // current slide, use halfway point as threshold

    this.setState({ slideNum })
  }
}

/* ----- STYLES ----- */

const styles = {
  container: {
    position: 'relative'
  },
  content: {
    overflowX: 'scroll',
    paddingBottom: 15,
    whiteSpace: 'nowrap'
  },
  slideWrapper: {
    display: 'inline-block'
  },
  navPane: {
    position: 'absolute',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    height: '100%',
    zIndex: 1
  },
  chevronIcon: {
    width: '66.66%'
  }
}