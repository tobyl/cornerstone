(function () {
  
  var homeVideo = document.querySelector('#intro')
  var playPauseBtn = document.querySelector('#play-pause')

  var playIcon = document.querySelector('#playIcon')
  var pauseIcon = document.querySelector('#pauseIcon')

  if (homeVideo && playPauseBtn) {
    playPauseBtn.addEventListener('click', function () {
      if (homeVideo.paused) {
        homeVideo.play()
        pauseIcon.classList.remove('hidden')
        playIcon.classList.add('hidden')
      } else {
        homeVideo.pause()
        pauseIcon.classList.add('hidden')
        playIcon.classList.remove('hidden')
      }
    })
  }

  // set year for copyright
  var yearHolder = document.querySelector('#year')
  var year = new Date().getFullYear()
  yearHolder.innerHTML = year

  // form handler

  var form = document.getElementById("contactForm")
  var innerForm = document.getElementById("innerForm")

  async function handleSubmit(event) {
    event.preventDefault()

    var status = document.getElementById("my-form-status")
    var data = new FormData(event.target)
    var concerns = ''

    var keys = [
      'depression',
      'substance_abuse',
      'family_issues',
      'anger_management',
      'child_behaviour',
      'trauma',
      'autism',
      'anxiety',
      'child_learning_disabilities',
      'couples_counselling',
      'child_psychology',
      'bereavement',
      'adhd',
      'other',
    ]
    
    keys.forEach((key) => {
      if (data.get(key) === 'on') {
        concerns += key + ', '
        data.delete(key)
      }
    })

    data.append('concerns', concerns)

    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!"
        innerForm.classList.add("hidden", "transition-all", "duration-500")
        window.scrollTo({ top: 0, behavior: 'smooth' })
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      console.log('e: ', error)
      status.innerHTML = "Oops! There was a problem submitting your form"
    })
  }
  form && form.addEventListener("submit", handleSubmit)

})();