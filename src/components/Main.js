import PropTypes from 'prop-types'
import React from 'react'
import ReactTooltip from 'react-tooltip';
import pic01 from '../images/IMG_1667sm.png'
import pic02 from '../images/pic02.jpg'
import resBack from '../images/background1.jpg'
import emailjs from 'emailjs-com';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'top',
      type: 'dark',
      effect: 'float',
      condition: false
    };
  }

  
// This is called when a user hits submit, sends email through emailjs module
  sendMessage(event) {
    event.preventDefault(); 
    emailjs.init("user_Zyk3oWA5zP2LN3SzJKQVZ");

    emailjs.sendForm('service_ooxok0h', 'template_i0to6do', event.target, 'user_Zyk3oWA5zP2LN3SzJKQVZ')
    .then(function(response) {
       alert("Email sent! I will get back to you as soon as possible. If you need to contact me urgently, click the Linkedin button below and message me there.");
    }, function(error) {
       alert("I'm sorry, I wasn't able to send an email this time, please try again later");
    });
    event.target.reset()
}


  render() {
    let close = (
      <div
        className="close"
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
        <ReactTooltip place='top' multiline='true' />
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
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
          className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
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
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
        >
          <div className='resumeBackground' onMouseLeave={() => { ReactTooltip.hide(this.fooRef) }} style={{ backgroundImage: `url(${resBack})`, objectFit: 'cover', width: '100%', height: '100%', float: 'left' }}>
            <div className='resumeDisplay' style={{ marginLeft: '3rem', marginRight: '3rem', marginTop: '3rem', marginBottom: '3rem' }}>
              <div className="portfolio2" style={{ margin: 'auto' }} ><span className="portfolio2">CARLO DEFILIPPIS</span></div>
              <div className="portfolio3"><span className="portfolio3" ref={ref => this.fooRef = ref} data-tip="I'm grew up in Wayne, NJ and spent a lot of summers <br> as a child visiting family in Italy which is the main reason <br> I am fluent in Italian." onMouseOver={() => { ReactTooltip.show(this.fooRef) }}>BUDD LAKE, NJ 07828</span></div>
              <div className="portfolio3"><span className="portfolio3">(973) 519-0335 | </span><a ref={ref => this.fooRef = ref} data-tip="Click here to email me." onMouseOver={() => { ReactTooltip.show(this.fooRef) }} href='mailto: carlo.defilippis@me.com'><span className="portfolio4">carlo.defilippis@me.com</span></a></div>
              <div className="portfolio5"><span className="portfolio5"> </span><a href="http://www.carlodefilippis.com/">www.carlodefilippis.com</a> </div>
              <div className="portfolio5"><span className="portfolio5"> </span><a href="https://github.com/carlo-defilippis/">https://github.com/Carlo-Defilippis</a> </div>
              <div className="portfolio5"><span className="portfolio5"> </span><a href="https://www.freecodecamp.org/carlodefilippis/">https://www.freecodecamp.org/carlodefilippis</a> </div>
              <div className="portfolio6"><span className="portfolio6">PROFESSIONAL SUMMARY</span></div>
              <div className="portfolio7"><span className="portfolio7">Innovative and proactive Full Stack Developer, successful at developing elegant, groundbreaking website and</span></div>
              <div className="portfolio7"><span className="portfolio7">application designs. Talented in project management, team collaboration and independent problem-solving.</span></div>
              <div className="portfolio7"><span className="portfolio7">Highly organized multitasking with expertise in scheduling projects, enhancing designs, writing and</span></div>
              <div className="portfolio7"><span className="portfolio7">verifying code. Prepared to offer analytical and detail oriented abilities to the team.</span></div>
              <div className="portfolio6"><span className="portfolio6">SKILLS</span></div>
              <div className="portfolio8"><span className="portfolio8">● </span><span className="portfolio5">Proficient in JavaScript</span></div>
              <div className="portfolio8"><span className="portfolio8">● </span><span className="portfolio5">Expertise working with data structures and</span></div>
              <div className="portfolio8"><span className="portfolio8">● </span><span className="portfolio5">Hands on experience with Node.JS</span></div>
              <div className="portfolio5"><span className="portfolio5">algorithms</span></div>
              <div className="portfolio8"><span className="portfolio8">● </span><span className="portfolio5">Scripting - JavaScript, Typescript, Bash</span></div>
              <div className="portfolio8"><span className="portfolio8">● </span><span className="portfolio5">Frameworks: Bootstrap, JQuery, Semantic-UI, AJAX,</span></div>
              <div className="portfolio5"><span className="portfolio5">Scripting, Python Databases - MySQL,</span></div>
              <div className="portfolio5"><span className="portfolio5">React.js, express</span></div>
              <div className="portfolio5"><span className="portfolio5">SQLServer, MongoDB (NoSQL)</span></div>
              <div className="portfolio8"><span className="portfolio8">● </span><span className="portfolio5">Agile development methodologies</span></div>
              <div className="portfolio8"><span className="portfolio8">● </span><span className="portfolio5">Expert in Git Version Control and hands on</span></div>
              <div className="portfolio5"><span className="portfolio5">Self-starter</span></div>
              <div className="portfolio5"><span className="portfolio5">Git-Flow</span></div>
              <div className="portfolio8"><span className="portfolio8">● </span><span className="portfolio5">Team player</span></div>
              <div className="portfolio6"><span className="portfolio6">WORK HISTORY</span></div>
              <div className="portfolio9"><span className="portfolio9">SCHUMACHER CHEVROLET</span></div>
              <div className="portfolio10"><span className="portfolio10">Parts Department Associate | Livingston, NJ | February 2018 - August 2020</span></div>
              <div className="portfolio5"><span className="portfolio5">Monitored social media and online sources for industry trends.</span></div>
              <div className="portfolio5"><span className="portfolio5">Handled all customer service issues quickly to maintain high satisfaction levels.</span></div>
              <div className="portfolio9"><span className="portfolio9">AUTOSPORT CHEVROLET</span></div>
              <div className="portfolio10"><span className="portfolio10">Parts Department Manager | Budd Lake, NJ | March 2011 - January 2018</span></div>
              <div className="portfolio5"><span className="portfolio5">Ordered parts for customers, repair shops and service department for use in vehicles and shop equipment.</span></div>
              <div className="portfolio5"><span className="portfolio5">Submitted reports to senior management to aid in business decision-making and planning. Oversaw employee</span></div>
              <div className="portfolio5"><span className="portfolio5">performance, corrected problems and increased efficiency to maintain productivity targets.</span></div>
              <div className="portfolio6"><span className="portfolio6">EDUCATION</span></div>
              <div className="portfolio9"><span className="portfolio9">RUTGERS UNIVERSITY FULL STACK CODING BOOTCAMP </span><span className="portfolio5">Full Stack Development Rutgers, The State</span></div>
              <div className="portfolio5"><span className="portfolio5">University of New Jersey</span></div>
              <div className="portfolio10"><span className="portfolio10">New Brunswick, NJ</span></div>
              <div className="portfolio8"><span className="portfolio8">● </span><span className="portfolio5">Graduated in Top 10% of Class</span></div>
              <div className="portfolio6"><span className="portfolio6">CERTIFICATIONS</span></div>
              <div className="portfolio8"><span className="portfolio8">● </span><span className="portfolio5">JavaScript Algorithms and Data Structures (fCC)</span></div>
            </div>
          </div>
          {close}
        </article>





        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" onSubmit={this.sendMessage}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name"/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"/>
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
                href="https://github.com/Carlo-Defilippis"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/carlo-defilippis"
                className="icon fa-linkedin-square"
              >
                <span className="label">Linkedin</span>
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
