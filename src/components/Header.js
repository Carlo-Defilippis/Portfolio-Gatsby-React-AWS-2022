import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <script type="text/javascript" src="51d648c6-8295-11eb-8b25-0cc47a792c0a_id_51d648c6-8295-11eb-8b25-0cc47a792c0a_files/wz_jsgraphics.js"></script>
    <div className="logo">
      <span className="icon fa-laptop"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Carlo DeFilippis</h1>
        <p>
          A fully responsive site designed by Carlo DeFilippis
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
            style={{ margin: '0', padding: '0', width: '100%' }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
            style={{ margin: '0', padding: '0', width: '100%' }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
            style={{ margin: '0', padding: '0', width: '100%' }}
          >
            Résumé
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
            style={{ margin: '0', padding: '0', width: '100%' }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
