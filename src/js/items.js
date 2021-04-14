// item1 animation
export function itemFirst() {
  $('#background-for-bike').one('click', function () {
    $(this).velocity({ right: 0 }, { duration: 10000 });
    $('#bikeride').velocity({ left: 7000 }, { duration: 11500 });
  });
}

// item2 animation
export function itemSecond() {
  // queue control-mobile-screen
  let $controlMobileScreen = (next) => {
    $('#control-mobile-screen').velocity(
      { fill: '#e1e7ad' },
      { complete: next }
    );
  };

  // queue control-mobile-screen-yes
  let $controlMobileScreenYes = (next) => {
    $('#control-mobile-screen-yes').velocity(
      { opacity: 1 },
      { duration: 1000, complete: next }
    );
  };

  // queue control-yellow
  let $yellowLight = (next) => {
    $('#control-yellow').velocity(
      { fill: '#f9f04e' },
      { duration: 1000, complete: next }
    );
  };

  // queue control-green
  let $greenLight = (next) => {
    $('#control-green').velocity(
      { fill: '#62d908' },
      { duration: 1000, complete: next }
    );
  };

  // queue control-blue
  let $blueLight = (next) => {
    $('#control-blue').velocity(
      { fill: '#62d908' },
      { duration: 1000, complete: next }
    );
  };

  // queue robot legs
  let $robotLegs = (next) => {
    $('#control-robot-leags').velocity(
      { translateX: '2px', translateY: '1px' },
      { duration: 100, loop: 40, complete: next }
    );
    $('#control-light').velocity(
      { translateX: '70px' },
      { duration: 1500, delay: 6000, complete: next }
    );
    $('#control-robot-eye').velocity(
      { opacity: 1 },
      { duration: 10000, delay: 1000, complete: next }
    );
  };

  // queue robot head
  let $robotHead = (next) => {
    $('#control-robot-eye').velocity(
      { opacity: 0 },
      { duration: 300, complete: next }
    );
    $('#control-robot-head').velocity(
      { translateY: '12px' },
      { duration: 200, delay: 4500, complete: next }
    );
  };

  // queue robot head rotate
  let $robotHeadRotate = (next) => {
    $('#control-robot-head').velocity({ rotateZ: '10deg' }, { complete: next });
  };

  // queue control woman head
  let scientistHead = (next) => {
    $('#control-woman-head').velocity(
      { rotateZ: '35deg' },
      { duration: 1000, delay: 2500, complete: next }
    );
  };

  // queue fail! class
  let $failClass = (next) => {
    $('.fail').velocity({ opacity: 1 }, { delay: 2000, complete: next });
  };

  // queue test-start text
  let $textRobot = (next) => {
    $('.small-robot').velocity({ opacity: 1 }, { delay: 2500, complete: next });
  };

  let arryOfFunction = [
    $controlMobileScreen,
    $controlMobileScreenYes,
    $yellowLight,
    $greenLight,
    $blueLight,
    $robotLegs,
    $robotHead,
    $robotHeadRotate,
    scientistHead,
    $failClass,
    $textRobot,
  ];

  arryOfFunction.forEach((element) => {
    $('#control-robot-container').queue('robot', element);
  });

  $('#control-robot-container').one('click', function () {
    $('#control-robot-container').dequeue('robot');
  });
}

// item3 animation
export function itemThird() {
  function randomPath(max) {
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    let translateRandom = Math.floor(Math.random() * max) + 1;
    let finalPath = plusOrMinus * translateRandom;
    return finalPath;
  }

  let $seaMan = () => {
    $('#sea-man').velocity(
      { translateX: -850, translateY: -200 },
      { duration: 13000 }
    );
  };

  let $seaFlowerA = () => {
    $('#sea-flower1').velocity(
      { rotateZ: '-2deg' },
      { duration: 1300, loop: 10 }
    );
  };

  let $seaFlowerB = () => {
    $('#sea-flower2').velocity(
      { rotateZ: '2deg' },
      { duration: 1300, loop: 10 }
    );
  };

  let bubbleArray = [
    '#sea-bubble1',
    '#sea-bubble2',
    '#sea-bubble3',
    '#sea-bubble4',
    '#sea-bubble5',
    '#sea-bubble6',
    '#sea-bubble7',
    '#sea-bubble8',
  ];
  let $seaBubble = () => {
    bubbleArray.forEach((element) => {
      $(element).velocity(
        { translateX: randomPath(1000), translateY: randomPath(800) },
        { duration: 13000 }
      );
    });
  };

  let $seaDivingClub = () => {
    $('.sea-diving-club').velocity(
      { opacity: 1 },
      { delay: 10000, duration: 4000 }
    );
  };

  $('#sea-container').one('click', function () {
    $seaMan();
    $seaBubble();
    $seaFlowerA();
    $seaFlowerB();
    $seaDivingClub();
  });
}
