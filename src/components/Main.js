import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/imageface.png'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import resBack from '../images/background1.jpg'


class Main extends React.Component {
  render() {
    console.log(this.props)
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )
    let closeResume = (
      <div
        className="closeResume"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          Innovative and proactive Full Stack Developer, successful at developing elegant,
groundbreaking website and application designs. Talented in project management, team
collaboration and independent problem-solving. Highly organized multitasking with expertise in scheduling
projects, enhancing designs, writing and verifying code. Prepared to offer analytical and detail oriented 
abilities to the team.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
          <h3 className="line"></h3>
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>
          
        
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          >
            <div style={{ backgroundImage: `url(${resBack})`, objectFit: 'cover', width: '100%', height: '100%', float: 'left'}}>
              <div className={'resumeDisplay'} style={{ marginLeft: '3rem', marginRight: '3rem', marginTop: '3rem', marginBottom: '3rem'}}>
              <div className="cls_002" style={{ margin: 'auto'}}><span className="cls_002">CARLO DEFILIPPIS</span></div>
              <div className="cls_003"><span className="cls_003">BUDD LAKE, NJ 07828</span></div>
              <div className="cls_003"><span className="cls_003">(973) 519-0335 | </span><a href='mailto: carlo.defilippis@me.com'><span className="cls_004">carlo.defilippis@me.com</span></a></div>
              <div className="cls_005"><span className="cls_005"> </span><a href="http://www.carlodefilippis.com/">www.carlodefilippis.com</a> </div>
              <div className="cls_005"><span className="cls_005"> </span><a href="https://github.com/carlo-defilippis/">https://github.com/Carlo-Defilippis</a> </div>
              <div className="cls_005"><span className="cls_005"> </span><a href="https://www.freecodecamp.org/carlodefilippis/">https://www.freecodecamp.org/carlodefilippis</a> </div>
              <div className="cls_006"><span className="cls_006">PROFESSIONAL SUMMARY</span></div>
              <div className="cls_007"><span className="cls_007">Innovative and proactive Full Stack Developer, successful at developing elegant, groundbreaking website and</span></div>
              <div className="cls_007"><span className="cls_007">application designs. Talented in project management, team collaboration and independent problem-solving.</span></div>
              <div className="cls_007"><span className="cls_007">Highly organized multitasking with expertise in scheduling projects, enhancing designs, writing and</span></div>
              <div className="cls_007"><span className="cls_007">verifying code. Prepared to offer analytical and detail oriented abilities to the team.</span></div>
              <div className="cls_006"><span className="cls_006">SKILLS</span></div>
              <div className="cls_008"><span className="cls_008">● </span><span className="cls_005">Proficient in JavaScript</span></div>
              <div className="cls_008"><span className="cls_008">● </span><span className="cls_005">Expertise working with data structures and</span></div>
              <div className="cls_008"><span className="cls_008">● </span><span className="cls_005">Hands on experience with Node.JS</span></div>
              <div className="cls_005"><span className="cls_005">algorithms</span></div>
              <div className="cls_008"><span className="cls_008">● </span><span className="cls_005">Scripting - JavaScript, Typescript, Bash</span></div>
              <div className="cls_008"><span className="cls_008">● </span><span className="cls_005">Frameworks: Bootstrap, JQuery, Semantic-UI, AJAX,</span></div>
              <div className="cls_005"><span className="cls_005">Scripting, Python Databases - MySQL,</span></div>
              <div className="cls_005"><span className="cls_005">React.js, express</span></div>
              <div className="cls_005"><span className="cls_005">SQLServer, MongoDB (NoSQL)</span></div>
              <div className="cls_008"><span className="cls_008">● </span><span className="cls_005">Agile development methodologies</span></div>
              <div className="cls_008"><span className="cls_008">● </span><span className="cls_005">Expert in Git Version Control and hands on</span></div>
              <div className="cls_005"><span className="cls_005">Self-starter</span></div>
              <div className="cls_005"><span className="cls_005">Git-Flow</span></div>
              <div className="cls_008"><span className="cls_008">● </span><span className="cls_005">Team player</span></div>
              <div className="cls_006"><span className="cls_006">WORK HISTORY</span></div>
              <div className="cls_009"><span className="cls_009">SCHUMACHER CHEVROLET</span></div>
              <div className="cls_010"><span className="cls_010">Parts Department Associate | Livingston, NJ | February 2018 - August 2020</span></div>
              <div className="cls_005"><span className="cls_005">Monitored social media and online sources for industry trends.</span></div>
              <div className="cls_005"><span className="cls_005">Handled all customer service issues quickly to maintain high satisfaction levels.</span></div>
              <div className="cls_009"><span className="cls_009">AUTOSPORT CHEVROLET</span></div>
              <div className="cls_010"><span className="cls_010">Parts Department Manager | Budd Lake, NJ | March 2011 - January 2018</span></div>
              <div className="cls_005"><span className="cls_005">Ordered parts for customers, repair shops and service department for use in vehicles and shop equipment.</span></div>
              <div className="cls_005"><span className="cls_005">Submitted reports to senior management to aid in business decision-making and planning. Oversaw employee</span></div>
              <div className="cls_005"><span className="cls_005">performance, corrected problems and increased efficiency to maintain productivity targets.</span></div>
              <div className="cls_006"><span className="cls_006">EDUCATION</span></div>
              <div className="cls_009"><span className="cls_009">RUTGERS UNIVERSITY FULL STACK CODING BOOTCAMP </span><span className="cls_005">Full Stack Development Rutgers, The State</span></div>
              <div className="cls_005"><span className="cls_005">University of New Jersey</span></div>
              <div className="cls_010"><span className="cls_010">New Brunswick, NJ</span></div>
              <div className="cls_008"><span className="cls_008">● </span><span className="cls_005">Graduated in Top 10% of Class</span></div>
              <div className="cls_006"><span className="cls_006">CERTIFICATIONS</span></div>
              <div className="cls_008"><span className="cls_008">● </span><span className="cls_005">JavaScript Algorithms and Data Structures (fCC)</span></div>
              </div>
            </div>

          {close}
        </article>
       
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
