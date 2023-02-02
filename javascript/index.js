// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...
getInstruction(
  'mashedPotatoes',
  0,
  (step0) => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`
    getInstruction(
      'mashedPotatoes',
      1,
      (step1) => {
        document.querySelector(
          '#mashedPotatoes'
        ).innerHTML += `<li>${step1}</li>`
        getInstruction(
          'mashedPotatoes',
          2,
          (step2) => {
            document.querySelector(
              '#mashedPotatoes'
            ).innerHTML += `<li>${step2}</li>`
            getInstruction(
              'mashedPotatoes',
              3,
              (step3) => {
                document.querySelector(
                  '#mashedPotatoes'
                ).innerHTML += `<li>${step3}</li>`
                getInstruction(
                  'mashedPotatoes',
                  4,
                  (step4) => {
                    document.querySelector(
                      '#mashedPotatoes'
                    ).innerHTML += `<li>${step4}</li>
                    <li>Mashed potatoes are ready</li>`
                    document.getElementById('mashedPotatoesImg').removeAttribute('hidden')

                  },
                  (error) => console.log(error)
                )
              },
              (error) => console.log(error)
            )
          },
          (error) => console.log(error)
        )
      },
      (error) => console.log(error)
    )
  },
  (error) => console.log(error)
)

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0).then((step0) => {
  document.querySelector('#steak').innerHTML += `<li>${step0}</li>`
  obtainInstruction('steak', 1).then((step1) => {
    document.querySelector('#steak').innerHTML += `<li>${step1}</li>`
    obtainInstruction('steak', 2).then((step2) => {
      document.querySelector('#steak').innerHTML += `<li>${step2}</li>`
      obtainInstruction('steak', 3).then((step3) => {
        document.querySelector('#steak').innerHTML += `<li>${step3}</li>`
        obtainInstruction('steak', 4).then((step4) => {
          document.querySelector('#steak').innerHTML += `<li>${step4}</li>`
          obtainInstruction('steak', 5).then((step5) => {
            document.querySelector('#steak').innerHTML += `<li>${step5}</li>`
            obtainInstruction('steak', 6).then((step6) => {
              document.querySelector('#steak').innerHTML += `<li>${step6}</li>`
              obtainInstruction('steak', 7).then((step7) => {
                document.querySelector(
                  '#steak'
                ).innerHTML += `<li>${step7}</li>`
                document.querySelector(
                  '#steak'
                ).innerHTML += `<li>Steak is ready</li>`
                document.getElementById('steakImg').removeAttribute('hidden')

              })
            })
          })
        })
      })
    })
  })
})

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here
  await getInstruction(
    'broccoli',
    0,
    (step0) => {
      document.querySelector('#broccoli').innerHTML += `<li>${step0}</li>`
      getInstruction(
        'broccoli',
        1,
        (step1) => {
          document.querySelector('#broccoli').innerHTML += `<li>${step1}</li>`
          getInstruction(
            'broccoli',
            2,
            (step2) => {
              document.querySelector(
                '#broccoli'
              ).innerHTML += `<li>${step2}</li>`
              getInstruction(
                'broccoli',
                3,
                (step3) => {
                  document.querySelector(
                    '#broccoli'
                  ).innerHTML += `<li>${step3}</li>`
                  getInstruction(
                    'broccoli',
                    4,
                    (step4) => {
                      document.querySelector(
                        '#broccoli'
                      ).innerHTML += `<li>${step4}</li>`
                      getInstruction(
                        'broccoli',
                        5,
                        (step5) => {
                          document.querySelector(
                            '#broccoli'
                          ).innerHTML += `<li>${step5}</li>`
                          getInstruction(
                            'broccoli',
                            6,
                            (step6) => {
                              document.querySelector(
                                '#broccoli'
                              ).innerHTML += `<li>${step6}</li>
                              <li>Broccoli is ready </li>`
                              document.getElementById('broccoliImg').removeAttribute('hidden')

                            },
                            (error) => console.log(error)
                          )
                        },
                        (error) => console.log(error)
                      )
                    },
                    (error) => console.log(error)
                  )
                },
                (error) => console.log(error)
              )
            },
            (error) => console.log(error)
          )
        },
        (error) => console.log(error)
      )
    },
    (error) => console.log(error)
  )
}

makeBroccoli()

// Bonus 2 - Promise all
// ...

Promise.all([
  getInstruction('brusselsSprouts', 0, () => {}),
  getInstruction('brusselsSprouts', 1, () => {}),
  getInstruction('brusselsSprouts', 2, () => {}),
  getInstruction('brusselsSprouts', 3, () => {}),
  getInstruction('brusselsSprouts', 4, () => {}),
  getInstruction('brusselsSprouts', 5, () => {}),
  getInstruction('brusselsSprouts', 6, () => {}),
  getInstruction('brusselsSprouts', 7, () => {}),
]).then(() => {
  brusselsSprouts.forEach((step) => {
    document.getElementById('brusselsSproutsImg').removeAttribute('hidden')
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step}</li>`
  })
})
