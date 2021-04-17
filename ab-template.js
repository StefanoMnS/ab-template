

const abTemplate = (function () {

  const getHandle = function (trgt) { // trgt is a string
    
    // pg targetH handle
    const targetH = document.querySelector(`${trgt}`);

    if (targetH !== null) return targetH

  }

  // add styles here
  const mainStyles = `

    #exp200__wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 450px;
      justify-content: center;
      align-items: center;
    }
    .exp200__wrapper heading {
      display: flex;
      width: 100%;
    }
    .exp200__wrapper h1 {
      text-align: center;
      width: 100%;
    }

`;

  return {

    // addCSS function
    addCSS: function (css) {
      const head = document.getElementsByTagName('head')[0]
      const s = document.createElement('style')
      s.setAttribute('type', 'text/css')
      s.appendChild(document.createTextNode(css))
      head.appendChild(s)
    },

    // doExperiment function
    doExperiment: function (divWrap) {
      divWrap.innerHTML = `
        <heading>
            <h1> Experiment test</h1>
        </heading>
     `
    },

    // start exec
    init: function () {

      // adds css
      this.addCSS(mainStyles);

      // gets handle(s) on page
      const domHandle = getHandle('.main-container');

      // create exp wrapper
      const expWrapper = document.createElement('div');
      expWrapper.id = 'exp200__wrapper';
      expWrapper.className = 'exp200__wrapper';

      // do experiment
      this.doExperiment(expWrapper)
      
      // insert to the DOM
      domHandle.parentElement.insertBefore(expWrapper, domHandle)
    }
  }
})()

// checks window global object
const isBrowser = () => typeof window !== 'undefined'

if (isBrowser()) {
  window.addEventListener('load', function () {
    // calls init function
    abTemplate.init()
  })
}

