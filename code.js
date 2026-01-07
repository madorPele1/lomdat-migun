let nextArrow;
let prevArrow;
let currentPage = 0;
let [
    firstPage, chaptersContainer, logo, introduction1, introduction2, introduction3, introduction4, intro4tooltip,
    introduction5, chapter1, chapterfirst2, chapterfirst3, chapterfirst4, box, chapterfirst5, chapterfirst6,
    chapterfirst7, chapterfirst8, chapterfirst9, chapterfirst10, chapterSecond, chapterfirst11,
    chapterSecond1, chapterSecond2, chapterSecond3, chapterSecond4, chapterSecond5, chapterSecond6, chapterSecond7, chapterThree, chapterThree1, chapterThree2, chapterThree3, chapterThree4, titleGame, container, chapterThree5, chapterThree6, chapterThree7, chapterThree8, chapterThree9, chapterThree10, chapterThree11, chapterThree12, chapterThree13, chapterThree14, chapterThree15, chapterFour, chapterFour1, chapterFour2, chapterFour3, chapterFour4, chapterFour5, chapterFour6, chapterFour7, chapterFour8, chapterFour9, chapterFour10, chapterFour11, chapterFour12, chapterFour13, chapterFour14, chapterFour15, chapterFifth, chapterFifth1, chapterFifth2, chapterFifth3, chapterFifth4, chapterFifth5, chapterFifth6, chpterFifthGame1, answersContainer, gameContainer, button, gameFifthAns, chpterFifthGame2, chpterFifthGame3, chapterFifth7, chapterFifth8, chapterFifth9, chapterFifth10, box2
] = [];

window.addEventListener("load", () => {

    nextArrow = document.getElementById("arrow-icon");
    prevArrow = document.getElementById("arrow-prev");
    // prevArrow.style.visibility = "hidden";
    nextArrow.addEventListener("click", goNext);
    prevArrow.addEventListener("click", goPrev);
    chaptersContainer = document.createElement("div");
    chaptersContainer.id = "chapters-container";
    document.body.appendChild(chaptersContainer);

    const chapters = [
        { name: "מבוא", func: showintro1 },
        { name: "פרק 1", func: showFirstchapter1 },
        { name: "פרק 2", func: showSecondChpater },
        { name: "פרק 3", func: showThreeChapter },
        { name: "פרק 4", func: showchapterFour },
        { name: "פרק 5", func: showchapterFifth }
    ];

    chapters.forEach(chapter => {
        const btn = document.createElement("button");
        btn.textContent = chapter.name;
        btn.classList.add("chapter-btn");

        btn.addEventListener("click", () => {
            const index = screens.indexOf(chapter.func);
            if (index !== -1) {
                currentPage = index;
                renderPage();
            }
        });

        chaptersContainer.appendChild(btn);
    });
    firstPage = document.createElement("img");
    firstPage.src = "media/firstPage.svg";
    firstPage.classList.add("text-style");
    firstPage.style.top = "45vh";
    document.getElementById("app").appendChild(firstPage);

    logo = document.createElement("img");
    logo.src = "media/iconMigun.svg";
    logo.classList.add("logo-style");
    document.body.appendChild(logo);
    introduction1 = document.createElement("img");
    introduction1.src = "media/introduction1.svg";
    introduction1.classList.add("text-style");
    document.body.appendChild(introduction1);
    introduction2 = document.createElement("img");
    introduction2.src = "media/introduction2.svg";
    introduction2.classList.add("text-style");
    document.body.appendChild(introduction2);
    introduction3 = document.createElement("img");
    introduction3.src = "media/introduction3.svg";
    introduction3.classList.add("text-style");
    document.body.appendChild(introduction3);
    introduction4 = document.createElement("img");
    introduction4.src = "media/introduction4.svg";
    introduction4.classList.add("text-style");
    document.body.appendChild(introduction4);
    intro4tooltip = document.createElement("img");
    intro4tooltip.src = "media/introduction4Second.svg";
    intro4tooltip.classList.add("tooltip-intro");
    document.body.appendChild(intro4tooltip);
    introduction5 = document.createElement("img");
    introduction5.src = "media/introduction5.svg";
    introduction5.classList.add("text-style");
    document.body.appendChild(introduction5);
    chapter1 = document.createElement("img");
    chapter1.src = "media/chapter1.svg";
    chapter1.classList.add("text-style");
    document.body.appendChild(chapter1);
    chapterfirst2 = document.createElement("img");
    chapterfirst2.src = "media/chapterFirst2.svg";
    chapterfirst2.classList.add("text-style");
    document.body.appendChild(chapterfirst2);
    chapterfirst3 = document.createElement("img");
    chapterfirst3.src = "media/chapterFirst3.svg";
    chapterfirst3.classList.add("text-style");
    document.body.appendChild(chapterfirst3);
    chapterfirst4 = document.createElement("img");
    chapterfirst4.src = "media/chapterFirst4.svg";
    chapterfirst4.classList.add("text-style");
    document.body.appendChild(chapterfirst4);
    chapterfirst5 = document.createElement("img");
    chapterfirst5.src = "media/chapterFirst5.svg";
    chapterfirst5.classList.add("text-style");
    document.body.appendChild(chapterfirst5);
    chapterfirst6 = document.createElement("img");
    chapterfirst6.src = "media/chapterFirst6.svg";
    chapterfirst6.classList.add("text-style");
    document.body.appendChild(chapterfirst6);
    chapterfirst7 = document.createElement("img");
    chapterfirst7.src = "media/chapterFirst7.svg";
    chapterfirst7.classList.add("text-style");
    document.body.appendChild(chapterfirst7);
    chapterfirst8 = document.createElement("img");
    chapterfirst8.src = "media/chapterFirst8.svg";
    chapterfirst8.classList.add("text-style");
    document.body.appendChild(chapterfirst8);
    chapterfirst9 = document.createElement("img");
    chapterfirst9.src = "media/chapterFirst9.svg";
    chapterfirst9.classList.add("text-style");
    document.body.appendChild(chapterfirst9);
    chapterfirst10 = document.createElement("img");
    chapterfirst10.src = "media/chapterFirst10.svg";
    chapterfirst10.classList.add("text-style");
    document.body.appendChild(chapterfirst10);
    chapterfirst11 = document.createElement("img");
    chapterfirst11.src = "media/chapterFirst11.svg";
    chapterfirst11.classList.add("text-style");
    document.body.appendChild(chapterfirst11);
    chapterSecond = document.createElement("img");
    chapterSecond.src = "media/chapterSecond.svg";
    chapterSecond.classList.add("text-style");
    document.body.appendChild(chapterSecond);
    chapterSecond1 = document.createElement("img");
    chapterSecond1.src = "media/chapterSecond1.svg";
    chapterSecond1.classList.add("text-style");
    document.body.appendChild(chapterSecond1);
    chapterSecond2 = document.createElement("img");
    chapterSecond2.src = "media/chapterSecond2.svg";
    chapterSecond2.classList.add("text-style");
    document.body.appendChild(chapterSecond2);
    chapterSecond3 = document.createElement("img");
    chapterSecond3.src = "media/chapterSecond3.svg";
    chapterSecond3.classList.add("text-style");
    document.body.appendChild(chapterSecond3);
    chapterSecond4 = document.createElement("img");
    chapterSecond4.src = "media/chapterSecond4.svg";
    chapterSecond4.classList.add("text-style");
    document.body.appendChild(chapterSecond4);
    chapterSecond5 = document.createElement("img");
    chapterSecond5.src = "media/chapterSecond5.svg";
    chapterSecond5.classList.add("text-style");
    document.body.appendChild(chapterSecond5);
    chapterSecond6 = document.createElement("img");
    chapterSecond6.src = "media/chapterSecond6.svg";
    chapterSecond6.classList.add("text-style");
    document.body.appendChild(chapterSecond6);
    chapterSecond7 = document.createElement("img");
    chapterSecond7.src = "media/chapterSecond7.svg";
    chapterSecond7.classList.add("text-style");
    document.body.appendChild(chapterSecond7);
    chapterThree = document.createElement("img");
    chapterThree.src = "media/chapterThree.svg";
    chapterThree.classList.add("text-style");
    document.body.appendChild(chapterThree);
    chapterThree1 = document.createElement("img");
    chapterThree1.src = "media/chapterThree1.svg";
    chapterThree1.classList.add("text-style");
    document.body.appendChild(chapterThree1);
    chapterThree2 = document.createElement("img");
    chapterThree2.src = "media/chapterThree2.svg";
    chapterThree2.classList.add("text-style");
    document.body.appendChild(chapterThree2);
    chapterThree3 = document.createElement("img");
    chapterThree3.src = "media/chapterThree3.svg";
    chapterThree3.classList.add("text-style");
    document.body.appendChild(chapterThree3);
    chapterThree4 = document.createElement("img");
    chapterThree4.src = "media/chapterThree4.svg";
    chapterThree4.classList.add("text-style");
    document.body.appendChild(chapterThree4);
    titleGame = document.createElement("img");
    titleGame.src = "media/titleGame.svg";
    titleGame.classList.add("text-style");
    document.body.appendChild(titleGame);
    box = document.createElement("div");
    box.classList.add("scroll-box-style");
    box.innerHTML = `
<div class="scroll-box">
  <div class="scroll-inner">
    <p>
      <span class="bold-title">• מבנה קשיח ורציף:</span>
      <span class="text-regular">
        הממ"ד נבנה מבטון מזוין בצורת תיבה אחידה, ללא קורות או עמודים נוספים, וכל חלקיו רתומים באופן רציף.
      </span>
    </p>

    <p>
      <span class="bold-title">• משטחים מישוריים:</span>
      <span class="text-regular">
        רצפה, קירות ותקרה יהיו ישרים וללא חריגות או בליטות.
      </span>
    </p>

    <p>
      <span class="bold-title">• יציבות:</span>
      <span class="text-regular">
        קירות הממ"ד בכל הקומות רציפים עד היסודות, להבטחת עמידות גם במקרה קריסת המבנה או חלקו כתוצאה מהשפעות הדף.
      </span>
    </p>

    <p>
      <span class="bold-title">• דרישות מילוט:</span>
      <span class="text-regular">
        לפחות שני פתחי מילוט (חלון ודלת או שתי דלתות) במיקומים שונים ולקירות שונים.
      </span>
    </p>

    <p>
      <span class="bold-title"> • אטימות מלאה:</span>
      <span class="text-regular">
        הממ"ד יהיה אטום לחלוטין, החלונות והדלתות מותקנים עם אמצעי אטימה להגנה מפני איומים ביולוגיים, כימיים וזליגת הדף.
      </span>
    </p>

    <p>
      <span class="bold-title">• שימוש מוגדר:</span>
      <span class="text-regular">
        הממ"ד ישמש כחלל בטיחותי, ויכול להיות דו-תכליתי כגון חדר מגורים. אין להשתמש בו כחלל למטבח, אמבטיה או שירותים.
      </span>
    </p>
  </div>
</div>`;
    document.body.appendChild(box);
    chaptersContainer.style.display = "block";
    chapterThree5 = document.createElement("img");
    chapterThree5.src = "media/chapterThree5.svg";
    chapterThree5.classList.add("text-style");
    document.body.appendChild(chapterThree5);
    chapterThree6 = document.createElement("img");
    chapterThree6.src = "media/chapterThree6.svg";
    chapterThree6.classList.add("text-style");
    document.body.appendChild(chapterThree6);
    chapterThree7 = document.createElement("img");
    chapterThree7.src = "media/chapterThree7.svg";
    chapterThree7.classList.add("text-style");
    document.body.appendChild(chapterThree7);
    chapterThree8 = document.createElement("img");
    chapterThree8.src = "media/chapterThree8.svg";
    chapterThree8.classList.add("text-style");
    document.body.appendChild(chapterThree8);
    chapterThree9 = document.createElement("img");
    chapterThree9.src = "media/chapterThree9.svg";
    chapterThree9.classList.add("text-style");
    document.body.appendChild(chapterThree9);
    chapterThree10 = document.createElement("img");
    chapterThree10.src = "media/chapterThree10.svg";
    chapterThree10.classList.add("text-style");
    document.body.appendChild(chapterThree10);
    //chapterThree11,chapterThree12,chapterThree13,chapterThree14
    chapterThree11 = document.createElement("img");
    chapterThree11.src = "media/chapterThree11.svg";
    chapterThree11.classList.add("text-style");
    document.body.appendChild(chapterThree11);
    chapterThree12 = document.createElement("img");
    chapterThree12.src = "media/chapterThree12.svg";
    chapterThree12.classList.add("text-style");
    document.body.appendChild(chapterThree12);
    chapterThree13 = document.createElement("img");
    chapterThree13.src = "media/chapterThree13.svg";
    chapterThree13.classList.add("text-style");
    document.body.appendChild(chapterThree13);
    chapterThree14 = document.createElement("img");
    chapterThree14.src = "media/chapterThree14.svg";
    chapterThree14.classList.add("text-style");
    document.body.appendChild(chapterThree14);

    chapterThree15 = document.createElement("img");
    chapterThree15.src = "media/chapterThree15.svg";
    chapterThree15.classList.add("text-style");
    document.body.appendChild(chapterThree15);

    chapterFour = document.createElement("img");
    chapterFour.src = "media/chapterFour.svg";
    chapterFour.classList.add("text-style");
    document.body.appendChild(chapterFour);


    chapterFour1 = document.createElement("img");
    chapterFour1.src = "media/chapterFour1.svg";
    chapterFour1.classList.add("text-style");
    document.body.appendChild(chapterFour1);

    chapterFour2 = document.createElement("img");
    chapterFour2.src = "media/chapterFour2.svg";
    chapterFour2.classList.add("text-style");
    document.body.appendChild(chapterFour2);

    chapterFour3 = document.createElement("img");
    chapterFour3.src = "media/chapterFour3.svg";
    chapterFour3.classList.add("text-style");
    document.body.appendChild(chapterFour3);

    chapterFour4 = document.createElement("img");
    chapterFour4.src = "media/chapterFour4.svg";
    chapterFour4.classList.add("text-style");
    document.body.appendChild(chapterFour4);

    chapterFour5 = document.createElement("img");
    chapterFour5.src = "media/chapterFour5.svg";
    chapterFour5.classList.add("text-style");
    document.body.appendChild(chapterFour5);

    chapterFour6 = document.createElement("img");
    chapterFour6.src = "media/chapterFour6.svg";
    chapterFour6.classList.add("text-style");
    document.body.appendChild(chapterFour6);

    chapterFour7 = document.createElement("img");
    chapterFour7.src = "media/chapterFour7.svg";
    chapterFour7.classList.add("text-style");
    document.body.appendChild(chapterFour7);

    chapterFour8 = document.createElement("img");
    chapterFour8.src = "media/chapterFour8.svg";
    chapterFour8.classList.add("text-style");
    document.body.appendChild(chapterFour8);

    chapterFour9 = document.createElement("img");
    chapterFour9.src = "media/chapterFour9.svg";
    chapterFour9.classList.add("text-style");
    document.body.appendChild(chapterFour9);

    chapterFour10 = document.createElement("img");
    chapterFour10.src = "media/chapterFour10.svg";
    chapterFour10.classList.add("text-style");
    document.body.appendChild(chapterFour10);

    chapterFour11 = document.createElement("img");
    chapterFour11.src = "media/chapterFour11.svg";
    chapterFour11.classList.add("text-style");
    document.body.appendChild(chapterFour11);

    chapterFour12 = document.createElement("img");
    chapterFour12.src = "media/chapterFour12.svg";
    chapterFour12.classList.add("text-style");
    document.body.appendChild(chapterFour12);

    chapterFour13 = document.createElement("img");
    chapterFour13.src = "media/chapterFour13.svg";
    chapterFour13.classList.add("text-style");
    document.body.appendChild(chapterFour13);

    chapterFour14 = document.createElement("img");
    chapterFour14.src = "media/chapterFour14.svg";
    chapterFour14.classList.add("text-style");
    document.body.appendChild(chapterFour14);

    chapterFour15 = document.createElement("img");
    chapterFour15.src = "media/chapterFour15.svg";
    chapterFour15.classList.add("text-style");
    document.body.appendChild(chapterFour15);

    chapterFifth = document.createElement("img");
    chapterFifth.src = "media/chapterFifth.svg";
    chapterFifth.classList.add("text-style");
    document.body.appendChild(chapterFifth);

    chapterFifth1 = document.createElement("img");
    chapterFifth1.src = "media/chapterFifth1.svg";
    chapterFifth1.classList.add("text-style");
    document.body.appendChild(chapterFifth1);

    chapterFifth2 = document.createElement("img");
    chapterFifth2.src = "media/chapterFifth2.svg";
    chapterFifth2.classList.add("text-style");
    document.body.appendChild(chapterFifth2);

    chapterFifth3 = document.createElement("img");
    chapterFifth3.src = "media/chapterFifth3.svg";
    chapterFifth3.classList.add("text-style");
    document.body.appendChild(chapterFifth3);

    chapterFifth4 = document.createElement("img");
    chapterFifth4.src = "media/chapterFifth4.svg";
    chapterFifth4.classList.add("text-style");
    document.body.appendChild(chapterFifth4);

    chapterFifth5 = document.createElement("img");
    chapterFifth5.src = "media/chapterFifth5.svg";
    chapterFifth5.classList.add("text-style");
    document.body.appendChild(chapterFifth5);

    chapterFifth6 = document.createElement("img");
    chapterFifth6.src = "media/chapterFifth6.svg";
    chapterFifth6.classList.add("text-style");
    document.body.appendChild(chapterFifth6);

    chpterFifthGame1 = document.createElement("img");
    chpterFifthGame1.src = "media/chpterFifthGame1.svg";
    chpterFifthGame1.classList.add("text-style");
    document.body.appendChild(chpterFifthGame1);

    gameFifthAns = document.createElement("img");
    gameFifthAns.src = "media/gameFifthAns.svg";
    gameFifthAns.classList.add("text-style");
    document.body.appendChild(gameFifthAns);

    button = document.createElement("button");
    button.textContent = "הוראות משחק";
    button.classList.add("button-game"); // תוסיף קלאס קיים אם צריך
    button.style.zIndex = "10";
    button.style.position = "fixed";   // אפשר לשנות למיקום קבוע
    button.style.top = "10px";
    button.style.right = "10px";
    button.style.pointerEvents = "auto";
    document.body.appendChild(button);

    const correctAnswer = "60";
    const answers = ["80", "40", "60"];

    // --- קונטיינר הורה ---  
    gameContainer = document.createElement("div");
    gameContainer.style.width = "90%";
    gameContainer.style.margin = "20px auto";
    gameContainer.style.flexDirection = "column";
    gameContainer.style.alignItems = "center";
    gameContainer.style.gap = "20px";
    document.body.appendChild(gameContainer);

    // --- הצגת התמונה הראשונית ---  
    chpterFifthGame1.style.width = "80%";
    chpterFifthGame1.style.height = "auto";
    gameContainer.appendChild(chpterFifthGame1);

    // --- הצגת תמונת התשובה (מוסתרת בהתחלה) ---  
    // gameFifthAns.style.width = "100%";
    // gameFifthAns.style.height = "auto";
    // gameFifthAns.style.display = "none";
    // gameContainer.appendChild(gameFifthAns);

    // --- יצירת כפתורים ---  
    answersContainer = document.createElement("div");
    answersContainer.style.position = "absolute"; // חובה!
    answersContainer.style.top = "50%";           // מרכז לאורך ציר Y
    answersContainer.style.right = "5vw";        // צמוד לצד ימין
    answersContainer.style.transform = "translateY(-50%)"; // מיישר במדויק
    answersContainer.style.width = "8vw";
    answersContainer.style.flexDirection = "column";
    answersContainer.style.gap = "10px";

    gameContainer.appendChild(answersContainer);

    chpterFifthGame2 = document.createElement("img");
    chpterFifthGame2.src = "media/chpterFifthGame2.svg";
    chpterFifthGame2.classList.add("text-style");
    document.body.appendChild(chpterFifthGame2);

    chpterFifthGame3 = document.createElement("img");
    chpterFifthGame3.src = "media/chpterFifthGame3.svg";
    chpterFifthGame3.classList.add("text-style");
    document.body.appendChild(chpterFifthGame3);

    chapterFifth7 = document.createElement("img");
    chapterFifth7.src = "media/chapterFifth7.svg";
    chapterFifth7.classList.add("text-style");
    document.body.appendChild(chapterFifth7);

    chapterFifth8 = document.createElement("img");
    chapterFifth8.src = "media/chapterFifth8.svg";
    chapterFifth8.classList.add("text-style");
    document.body.appendChild(chapterFifth8);

    chapterFifth9 = document.createElement("img");
    chapterFifth9.src = "media/chapterFifth9.svg";
    chapterFifth9.classList.add("text-style");
    document.body.appendChild(chapterFifth9);

    chapterFifth10 = document.createElement("img");
    chapterFifth10.src = "media/chapterFifth10.svg";
    chapterFifth10.classList.add("text-style");
    document.body.appendChild(chapterFifth10);
    //     box = document.createElement("div");
    //     box.classList.add("scroll-box-style");
    //     box.innerHTML = `
    // <div class="scroll-box">
    //   <div class="scroll-inner">
    //     <p>
    //       <span class="bold-title">• מבנה קשיח ורציף:</span>
    //       <span class="text-regular">
    //         הממ"ד נבנה מבטון מזוין בצורת תיבה אחידה, ללא קורות או עמודים נוספים, וכל חלקיו רתומים באופן רציף.
    //       </span>
    //     </p>

    //     <p>
    //       <span class="bold-title">• משטחים מישוריים:</span>
    //       <span class="text-regular">
    //         רצפה, קירות ותקרה יהיו ישרים וללא חריגות או בליטות.
    //       </span>
    //     </p>

    //     <p>
    //       <span class="bold-title">• יציבות:</span>
    //       <span class="text-regular">
    //         קירות הממ"ד בכל הקומות רציפים עד היסודות, להבטחת עמידות גם במקרה קריסת המבנה או חלקו כתוצאה מהשפעות הדף.
    //       </span>
    //     </p>

    //     <p>
    //       <span class="bold-title">• דרישות מילוט:</span>
    //       <span class="text-regular">
    //         לפחות שני פתחי מילוט (חלון ודלת או שתי דלתות) במיקומים שונים ולקירות שונים.
    //       </span>
    //     </p>

    //     <p>
    //       <span class="bold-title"> • אטימות מלאה:</span>
    //       <span class="text-regular">
    //         הממ"ד יהיה אטום לחלוטין, החלונות והדלתות מותקנים עם אמצעי אטימה להגנה מפני איומים ביולוגיים, כימיים וזליגת הדף.
    //       </span>
    //     </p>

    //     <p>
    //       <span class="bold-title">• שימוש מוגדר:</span>
    //       <span class="text-regular">
    //         הממ"ד ישמש כחלל בטיחותי, ויכול להיות דו-תכליתי כגון חדר מגורים. אין להשתמש בו כחלל למטבח, אמבטיה או שירותים.
    //       </span>
    //     </p>
    //   </div>
    // </div>`;
    //     document.body.appendChild(box);
    box2 = document.createElement("div");
    box2.classList.add("scroll-box2");

    box2.innerHTML = `
<div class="scroll-inner2">

    <p>
        <span class="text-regular">
נבחן חלק מתוכנית של ממ"ד, נתמקד בצינור כבילה בקוטר 4" המופיע בקיר הימני העליון (מסומן בעיגול כחול) ונבדוק האם הוא עומד בדרישות הטבלה.
שימו לב: המדידות מתבצעות מאמצע הצינור.
        </span>
    </p>

    <p>
        <span class="bold-title">1.  מרחק מהקיר הניצב</span><br>
        <span class="text-regular">
לפי הטבלה: נדרש מינימום 25 ס"מ.
בתוכנית: המרחק בפועל 40 ס"מ.
     עומד בדרישה
        </span>
    </p>

    <p>
        <span class="bold-title">2. מרחק מצינור כניסת אוויר (מסומן בעיגול ירוק)</span><br>
        <span class="text-regular">
ניתן לראות צינור כניסת אוויר בקיר הימני התחתון.
לפי הטבלה: עבור שני צינורות בקוטר 4", המרחק המינימלי הוא 40 ס"מ.
בתוכנית: המרחק בפועל 361 ס"מ (מסומן בקו מידה כחול מודגש מצד ימין)
     עומד בדרישה.
        </span>
    </p>

    <p>
        <span class="text-regular">
בתוכנית: המרחק בפועל 361 ס"מ (מסומן בקו מידה כחול מודגש מצד ימין)
 עומד בדרישה.
        </span>
    </p>

    <p>
        <span class="bold-title">3. גובה הצינור מהתקרה והרצפה</span><br>
        <span class="text-regular">
לפי הטבלה: יש לשמור על מרחק מינימום 25 ס"מ מהתקרה ו190 ס"מ מהרצפה 
בתוכנית: גובה הצינור מהרצפה 235 ס"מ → תקין.
בגלל שהצינור לא מופיע בחתך (בשקופית 54) נבין את הגובה על סמך הנתונים הקיימים:
גובה החלל (מהחתך בשקופית 54): 270 ס"מ.
נכן נחסיר מגובה החלל את הגובה של הצינור מהרצפה 
חישוב המרחק מהתקרה: ‎270 – 235 = 35 ס"מ.
לכן המרחק בין אמצע הצינור לתקרה הוא 35 ס"מ משמע המרחק תקין 
      עומד בדרישה.
        </span>
    </p>

</div>
`;

    document.body.appendChild(box2);

    [
        firstPage, logo, introduction1, introduction2, introduction3, introduction4, intro4tooltip,
        introduction5, chapter1, chapterfirst2, chapterfirst3, chapterfirst4, chapterfirst5,
        chapterfirst6, box, chapterfirst7, chapterfirst8, chapterfirst9, chapterfirst10,
        chapterfirst11, chapterSecond, chapterSecond1, chapterSecond2, chapterSecond3, chapterSecond4, chapterSecond5, chapterSecond6, chapterSecond7, chapterThree, chapterThree1, chapterThree2, chapterThree3, chapterThree4, titleGame, container, chapterThree5, chapterThree6, chapterThree7, chapterThree8, chapterThree9, chapterThree10, chapterThree11, chapterThree12, chapterThree13, chapterThree14, chapterThree15, chapterFour, chapterFour1, chapterFour2, chapterFour3, chapterFour4, chapterFour5, chapterFour6, chapterFour7, chapterFour8, chapterFour9, chapterFour10, chapterFour11, chapterFour12, chapterFour13, chapterFour14, chapterFour15, chapterFifth, chapterFifth1, chapterFifth2, chapterFifth3, chapterFifth4, chapterFifth5, chapterFifth6, chpterFifthGame1, answersContainer, gameContainer, button, gameFifthAns, chpterFifthGame2, chpterFifthGame3, chapterFifth7, chapterFifth8, chapterFifth9, chapterFifth10, box2
    ].forEach(el => el && (el.style.display = "none"));
    screens = [showHome, showIntro, showintro1, showintro2, showintro3, showintro4, showFirstchapter1, showFirstchapter2, showFirstchapter3, showFirstchapter4, showFirstchapter5, showFirstchapter6, showFirstchapter7, showFirstchapter8, showFirstchapter9, showFirstchapter10, showFirstchapter11, showSecondChpater, showSecondChpater1, showSecondChpater2, showSecondChpater3, showSecondChpater4, showSecondChpater5, showSecondChpater6, showSecondChpater7, showThreeChapter, showThreeChapter1, showThreeChapter2, showThreeChapter3, showThreeChapter4, showThreeChapterGame, showThreeChapter5, showThreeChapter6, showThreeChapter7, showThreeChapter8, showThreeChapter9, showThreeChapter10, showThreeChapter11, showThreeChapter12, showThreeChapter13, showThreeChapter14, showThreeChapterGame, showThreeChapter15, showchapterFour, showchapterFour1, showchapterFour2, showchapterFour3, showchapterFour4, showchapterFour5, showchapterFour6, showchapterFour7, showchapterFour8, showchapterFour9, showchapterFour11, showchapterFour12, showchapterFour13, showchapterFour14, showchapterFour15, showchapterFifth, showchapterFifth1, showchapterFifth2, showchapterFifth3, showchapterFifth4, showchapterFifth5, showchapterFifth6, showchpterFifthGame1, showchpterFifthGame2, showchpterFifthGame3, showchapterFifth7, showchapterFifth8, showchapterFifth9, showchapterFifth10];
    renderPage();
});

function goNext() {
    if (currentPage < screens.length - 1) currentPage++;
    renderPage();
}

function goPrev() {
    if (currentPage > 0) currentPage--;
    renderPage();
}
function renderPage() {
    // מסתירים את כל המסכים
    [
        firstPage, logo, introduction1, introduction2, introduction3, introduction4, intro4tooltip,
        introduction5, chapter1, chapterfirst2, chapterfirst3, chapterfirst4, chapterfirst5,
        chapterfirst6, box, chapterfirst7, chapterfirst8, chapterfirst9, chapterfirst10,
        chapterfirst11, chapterSecond, chapterSecond1, chapterSecond2, chapterSecond3, chapterSecond4, chapterSecond5, chapterSecond6, chapterSecond7, chapterThree, chapterThree1, chapterThree2, chapterThree3, chapterThree4, titleGame, container, chapterThree5, chapterThree6, chapterThree7, chapterThree8, chapterThree9, chapterThree10, chapterThree11, chapterThree12, chapterThree13, chapterThree14, chapterThree15, chapterFour, chapterFour1, chapterFour2, chapterFour3, chapterFour4, chapterFour5, chapterFour6, chapterFour7, chapterFour8, chapterFour9, chapterFour10, chapterFour11, chapterFour12, chapterFour13, chapterFour14, chapterFour15, chapterFifth, chapterFifth1, chapterFifth2, chapterFifth3, chapterFifth4, chapterFifth5, chapterFifth6, chpterFifthGame1, answersContainer, gameContainer, button, gameFifthAns, chpterFifthGame2, chpterFifthGame3, chapterFifth7, chapterFifth8, chapterFifth9, chapterFifth10, box2
    ].forEach(el => el && (el.style.display = "none"));

    // מציגים את המסך הנוכחי
    screens[currentPage]();

    // חצים
    prevArrow.style.display = currentPage === 0 ? "none" : "block";
    nextArrow.style.display = currentPage === screens.length - 1 ? "none" : "block";
}

function hideAllScreens() {
    document.querySelectorAll(".text-style, .scroll-box-style, .scroll-box2-style, .tooltip-intro")
        .forEach(el => el.style.display = "none");
}

function showHome() {
    document.body.style.backgroundImage = "url('media/backgroundnew1.svg')";
    chaptersContainer.style.display = "block";
    firstPage.style.display = "block";
    // prevArrow.style.visibility = "hidden";
}

function showIntro() {
    hideAllScreens();

    logo.style.display = "block";
    introduction1.style.display = "block";
    introduction1.style.width = "80%";
    // prevArrow.style.visibility = "visible";
}

function showintro1() {
    hideAllScreens();

    introduction2.style.display = "block";
    logo.style.display = "block";
    introduction2.style.width = "85%";
    introduction2.style.top = "44%";
}

function showintro2() {
    hideAllScreens();

    logo.style.display = "block";
    introduction3.style.display = "block";
    introduction3.style.width = "88%";
    introduction3.style.top = "39.5%";
}

function showintro3() {
    hideAllScreens();

    logo.style.display = "block";
    intro4tooltip.style.display = "block";
    introduction4.style.display = "block";
    introduction4.style.width = "80%";
    introduction4.style.top = "35.5%";
}

function showintro4() {
    hideAllScreens();

    logo.style.display = "block";
    introduction5.style.display = "block";
    introduction5.style.width = "75%";
    introduction5.style.transform = "";
    introduction5.style.top = "45.5%";
}


function showFirstchapter1() {
    hideAllScreens();

    logo.style.display = "block";
    chapter1.style.display = "block";
    chapter1.style.width = "70%";
    chapter1.style.top = "44%";
}

function showFirstchapter2() {
    hideAllScreens();

    chapterfirst2.style.display = "block";
    logo.style.display = "block";
    chapterfirst2.style.top = "35%";
    chapterfirst2.style.width = "85%"
}


function showFirstchapter3() {
    hideAllScreens();

    chapterfirst3.style.display = "block";
    logo.style.display = "block";
    // prevArrow.style.display = "block";
    chapterfirst3.style.top = "25%";
    chapterfirst3.style.width = "85%";
    box.style.display = "block";
}

function showFirstchapter4() {
    hideAllScreens();

    box.style.display = "none";
    logo.style.display = "block";
    chapterfirst4.style.display = "block";
    chapterfirst4.style.width = "62%";
    chapterfirst4.style.top = "46%";
}

function showFirstchapter5() {
    hideAllScreens();

    chapterfirst5.style.display = "block";
    logo.style.display = "block";
    chapterfirst5.style.width = "84%";
    nextArrow.style.zIndex = "3";
    prevArrow.style.zIndex = "3";
}

function showFirstchapter6() {
    hideAllScreens();

    nextArrow.style.zIndex = "3";
    prevArrow.style.zIndex = "3";
    chapterfirst6.style.display = "block";
    logo.style.display = "block";
    chapterfirst6.style.width = "82%";
    chapterfirst6.style.top = "50%";
}

function showFirstchapter7() {
    hideAllScreens();

    chapterfirst7.style.display = "block";
    logo.style.display = "block";
    chapterfirst7.style.width = "74%";
    chapterfirst7.style.top = "44%";
    nextArrow.style.zIndex = "3";
    prevArrow.style.zIndex = "3";
}

function showFirstchapter8() {
    hideAllScreens();

    chapterfirst8.style.display = "block";
    logo.style.display = "block";
    chapterfirst8.style.width = "74%";
    chapterfirst8.style.top = "44%";
    nextArrow.style.zIndex = "3";
    prevArrow.style.zIndex = "3";
}

function showFirstchapter9() {
    hideAllScreens();

    chapterfirst9.style.display = "block";
    logo.style.display = "block";
    chapterfirst9.style.width = "82%";
    chapterfirst9.style.top = "44%";
    nextArrow.style.zIndex = "3";
    prevArrow.style.zIndex = "3";
}
function showFirstchapter10() {
    hideAllScreens();

    chapterfirst10.style.display = "block";
    logo.style.display = "block";
    chapterfirst10.style.width = "100%";          // תמיד 100%
    chapterfirst10.style.position = "relative";   // חשוב!
    chapterfirst10.style.top = "10%";   // חשוב!
    nextArrow.style.zIndex = "3";
    prevArrow.style.zIndex = "3";
    chapterfirst10.style.left = "-3vw";           // מזיז שמאלה טיפה
    chapterfirst10.style.transform = "translateX(-3vw)"; // הבלטה נקייה שמאלה
}
function showFirstchapter11() {
    hideAllScreens();

    chapterfirst11.style.display = "block";
    logo.style.display = "block";
    chapterfirst11.style.width = "82%";
    nextArrow.style.zIndex = "3";
    prevArrow.style.zIndex = "3";
    chapterfirst11.style.top = "40%";
}

function showSecondChpater() {
    hideAllScreens();

    nextArrow.style.zIndex = "3";
    prevArrow.style.zIndex = "3";
    chapterSecond.style.display = "block";
    logo.style.display = "block";
    chapterSecond.style.width = "60%";
    chapterSecond.style.top = "44%";
}

function showSecondChpater1() {
    hideAllScreens();

    nextArrow.style.zIndex = "3";
    prevArrow.style.zIndex = "3";
    chapterSecond1.style.display = "block";
    logo.style.display = "block";
    chapterSecond1.style.width = "78%";
    chapterSecond1.style.top = "44%";
}

function showSecondChpater2() {
    hideAllScreens();

    nextArrow.style.zIndex = "3";
    prevArrow.style.zIndex = "3";

    chapterSecond2.style.display = "block";
    logo.style.display = "block";
    chapterSecond2.style.width = "76%";
    chapterSecond2.style.top = "44%";
}

function showSecondChpater3() {
    hideAllScreens();

    nextArrow.style.zIndex = "3";
    prevArrow.style.zIndex = "3";
    chapterSecond3.style.display = "block";
    logo.style.display = "block";
    chapterSecond3.style.width = "88%";
    chapterSecond3.style.top = "40%";
}

function showSecondChpater4() {

    hideAllScreens();
    logo.style.zIndex = "3";
    chapterSecond4.style.display = "block";
    logo.style.display = "block";
    chapterSecond4.style.width = "76%";
    chapterSecond4.style.top = "39%";
}

function showSecondChpater5() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterSecond5.style.display = "block";
    logo.style.display = "block";
    chapterSecond5.style.width = "79%";
    chapterSecond5.style.top = "37%";
}
function showSecondChpater6() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterSecond6.style.display = "block";
    logo.style.display = "block";
    chapterSecond6.style.width = "75%";
    chapterSecond6.style.top = "40%";
}
function showSecondChpater7() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterSecond7.style.display = "block";
    logo.style.display = "block";
    chapterSecond7.style.width = "76%";
    chapterSecond7.style.top = "39%";
}

function showThreeChapter() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree.style.display = "block";
    logo.style.display = "block";
    chapterThree.style.width = "60%";
    chapterThree.style.top = "44%";
}

function showThreeChapter1() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree1.style.display = "block";
    logo.style.display = "block";
    chapterThree1.style.width = "76%";
    chapterThree1.style.top = "39%";
}
function showThreeChapter2() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree2.style.display = "block";
    logo.style.display = "block";
    chapterThree2.style.width = "82%";
    chapterThree2.style.top = "39%";
}
function showThreeChapter3() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree3.style.display = "block";
    logo.style.display = "block";
    chapterThree3.style.width = "96%";
    chapterThree3.style.top = "39%";
}
function showThreeChapter4() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree4.style.display = "block";
    logo.style.display = "block";

    chapterThree4.style.width = "85%";
    chapterThree4.style.top = "40%";

    // chapterThree4.style.right = "2%";   // הזיזי ימינה כמה שצריך
    // chapterThree4.style.left = "unset";
    // chapterThree4.style.transform = "none";
}

function showThreeChapterGame() {
    hideAllScreens();

    titleGame.style.display = "block";
    titleGame.style.width = "100%";
    titleGame.style.top = "24%";

    logo.style.zIndex = "3";
    logo.style.display = "block";

    container = document.querySelector('.game-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'game-container';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.pointerEvents = "none";

        container.style.alignItems = 'center';
        container.style.marginTop = '0.5vh';
        container.style.marginBottom = '0.5vh';

        // הקונטיינר לא חוסם את החצים
        container.style.position = "relative";
        container.style.zIndex = "1";
        document.body.appendChild(container);
    }

    container.innerHTML = ""; // מנקה תוכן קודם
    // יצירת ה-Overlay וה-Modal (עם סגנון בסיסי כדי שזה יעבוד מיד)
    const overlay = document.createElement("div");
    overlay.id = "game-overlay";
    overlay.style.display = "none";           // מוסתר בהתחלה
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.55)";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "999";

    // הקונטיינר של ההוראות
    const modal = document.createElement("div");
    modal.id = "instructions-modal";
    // אם יש לך CSS חיצוני, ניתן להוציא שורות אלו
    modal.style.background = "#fff";
    modal.style.width = "70vw";
    modal.style.maxWidth = "900px";
    modal.style.padding = "30px";
    modal.style.borderRadius = "16px";
    modal.style.position = "relative";
    modal.style.direction = "rtl";

    // כפתור סגירה (נשאר יציב ב-DOM)
    const closeBtn = document.createElement("div");
    closeBtn.id = "close-instructions";
    closeBtn.textContent = "X";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "12px";
    closeBtn.style.left = "16px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "28px";
    closeBtn.style.color = "#5f8c90";
    modal.appendChild(closeBtn);

    // הוספת התמונה והטקסט בלי להשתמש ב-innerHTML +=
    modal.insertAdjacentHTML("beforeend", `
  <img src="media/introGame.svg" alt="הוראות משחק" style="width:100%; margin-bottom:10px;">
`);

    // מחברים ל-DOM
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // יצירת כפתור "הוראות משחק" (כמו שלך)
    const buttonGame = document.createElement("button");
    buttonGame.textContent = "הוראות משחק";
    buttonGame.classList.add("button-game");
    buttonGame.style.zIndex = "5";
    container.appendChild(buttonGame);
    buttonGame.style.pointerEvents = "auto";

    buttonGame.addEventListener("click", () => {
        overlay.style.display = "flex";
        // חסימת לחיצות על האלמנטים שמאחורי ה-overlay:
        container.style.pointerEvents = "none";
    });

    // סגירה - ה-event listener על closeBtn יספיק ועכשיו לא יאבד
    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        container.style.pointerEvents = "auto";
    });


    const nextArrow = document.getElementById("nextArrow");
    const prevArrow = document.getElementById("prevArrow");

    if (nextArrow) {
        nextArrow.style.position = "fixed";
        nextArrow.style.zIndex = "9999";
    }

    if (prevArrow) {
        prevArrow.style.position = "fixed";
        prevArrow.style.zIndex = "9999";
    }

    const blueCardsData = [
        "מידת חלון תקינה",
        "עובי פלדה בממ\"ד ביישוב עורפי",
        "מרחק בין החלון לתקרה",
        "איזה חלון חייב להיות בקיר חיצוני בעומק 30 ס\"מ",
        "שטח חלון מקסימלי",
        "גובה סף חלון מהרצפה"
    ];

    const yellowCardsData = [
        '20 מ"מ',
        '18 מ"מ',
        '105 ס"מ',
        'חלון נגרר לתוך כיס',
        '1.21 מ"ר',
        '200 ס"מ',
        'חלון צירי',
        '2 מ"ר',
        '15 ס"מ',
        '90/100',
        '91/100'
    ];

    window.correctMap = {
        'מידת חלון תקינה': '90/100',
        'עובי פלדה בממ"ד ביישוב עורפי': '18 מ"מ',
        'מרחק בין החלון לתקרה': '15 ס"מ',
        'איזה חלון חייב להיות בקיר חיצוני בעומק 30 ס"מ': 'חלון נגרר לתוך כיס',
        'שטח חלון מקסימלי': '1.21 מ"ר',
        'גובה סף חלון מהרצפה': '105 ס"מ'
    };

    const blueArea = document.createElement('div');
    blueArea.className = 'blue-area';
    blueArea.style.display = 'flex';
    blueArea.style.alignItems = 'center';
    container.appendChild(blueArea);

    blueCardsData.forEach(text => {
        const card = document.createElement('div');
        card.className = 'blue-card';
        card.dataset.key = text;
        card.textContent = text;
        card.style.pointerEvents = "auto";
        card.style.padding = "2vw 1vh";
        card.style.margin = "6vw 2vh";
        card.style.textAlign = "center";
        card.draggable = true;
        card.addEventListener('dragstart', onDragStart);
        card.addEventListener('dragend', onDragEnd);
        blueArea.appendChild(card);
    });

    const yellowArea = document.createElement('div');
    yellowArea.className = 'yellow-area';
    yellowArea.style.display = 'flex';
    yellowArea.style.flexDirection = 'column';
    yellowArea.style.alignItems = 'center';
    container.appendChild(yellowArea);
    const row1 = document.createElement('div');
    const row2 = document.createElement('div');
    row1.className = 'yellow-row';
    row2.className = 'yellow-row';
    row1.style.display = 'flex';
    row1.style.gap = '10px';
    row1.style.alignItems = "stretch";

    row2.style.display = 'flex';

    row2.style.gap = '10px';
    row2.style.alignItems = "stretch";
    yellowArea.appendChild(row1);
    yellowArea.appendChild(row2);
    yellowCardsData.forEach((text, i) => {
        const card = document.createElement('div');
        card.className = 'yellow-card';
        card.textContent = text;
        card.dataset.value = text;
        card.style.boxSizing = "border-box";
        card.style.minHeight = "60px";

        card.style.pointerEvents = "auto";
        card.style.padding = "2vw 1vh";
        card.style.width = "10vw";
        card.style.textAlign = "center";
        card.style.margin = "0.5vw 0.5vh";
        card.addEventListener('dragover', e => e.preventDefault());
        card.addEventListener('drop', onDrop);
        (i < 6 ? row1 : row2).appendChild(card);
    });
}

function onDragStart(e) {
    const card = e.currentTarget;

    e.dataTransfer.setData('text/plain', card.dataset.key);

    // שמירת מיקום מקורי
    card.dataset.originalParentIndex = [...card.parentNode.children].indexOf(card);
    card.dataset.originalParent = 'blue-area';

    card.classList.add('dragging');
}

function onDragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

function onDrop(e) {
    e.preventDefault();
    const draggedKey = e.dataTransfer.getData('text/plain');
    const targetValue = e.currentTarget?.dataset?.value;
    if (!draggedKey || !targetValue) return;
    const blueCard = document.querySelector(`.blue-card[data-key='${draggedKey}']`);
    if (!blueCard) return;
    e.currentTarget.style.position = "relative";
    e.currentTarget.querySelectorAll('.true-icon, .false-icon').forEach(icon => icon.remove());
    const addIconAndText = (isCorrect, card) => {
        if (!blueCard || !card) return;
        if (isCorrect) {
            card.textContent = blueCard.textContent;
            card.style.backgroundColor = "#dbf6fa";
            blueCard.style.display = "none";
        }
        const icon = document.createElement("img");
        icon.src = isCorrect ? "media/trueIcon.svg" : "media/FalseIcon.svg";
        icon.style.position = "absolute";
        icon.style.right = "6px";
        icon.style.bottom = "6px";
        icon.classList.add(isCorrect ? "true-icon" : "false-icon");
        card.appendChild(icon);
    };

    const targetCard = e.currentTarget; // שמירה על הכרטיס הצהוב
    const rect = targetCard.getBoundingClientRect();
    targetCard.style.width = rect.width + "px";
    targetCard.style.height = rect.height + "px";
    targetCard.style.flexShrink = "0";
    if (window.correctMap[draggedKey] === targetValue) {
        addIconAndText(true, targetCard);
    } else {
        const originalText = targetCard.textContent;

        // הצמדת הכחול לצהוב
        targetCard.textContent = blueCard.textContent;
        targetCard.style.backgroundColor = "#ffe4a8";

        blueCard.style.display = "none";

        const icon = document.createElement("img");
        icon.src = "media/FalseIcon.svg";
        icon.classList.add("false-icon");
        icon.style.position = "absolute";
        icon.style.right = "6px";
        icon.style.bottom = "6px";
        targetCard.appendChild(icon);

        // אחרי 2 שניות – חזרה למצב המקורי
        setTimeout(() => {
            // החזרת הטקסט הצהוב
            targetCard.textContent = originalText;
            targetCard.style.backgroundColor = "";
            icon.remove();

            // החזרת הכרטיס הכחול למקום
            blueCard.style.display = "block";

            const blueArea = document.querySelector('.blue-area');
            const index = Number(blueCard.dataset.originalParentIndex);

            if (blueArea && !isNaN(index)) {
                blueArea.insertBefore(
                    blueCard,
                    blueArea.children[index] || null
                );
            }
        }, 2000);
    }
}

function showThreeChapter5() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree5.style.display = "block";
    logo.style.display = "block";
    chapterThree5.style.width = "77%";
    chapterThree5.style.top = "42%";
}

function showThreeChapter6() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree6.style.display = "block";
    logo.style.display = "block";
    chapterThree6.style.width = "94%";
    chapterThree6.style.top = "42%";
}

function showThreeChapter7() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree7.style.display = "block";
    logo.style.display = "block";
    chapterThree7.style.width = "69%";
    chapterThree7.style.top = "46%";
}

function showThreeChapter8() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree8.style.display = "block";
    logo.style.display = "block";
    chapterThree8.style.width = "94%";
    chapterThree8.style.top = "39%";
}

function showThreeChapter9() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree9.style.display = "block";
    logo.style.display = "block";
    chapterThree9.style.width = "90%";
    chapterThree9.style.top = "39%";
}

function showThreeChapter10() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree10.style.display = "block";
    logo.style.display = "block";
    chapterThree10.style.width = "88%";
    chapterThree10.style.top = "42%";
}

function showThreeChapter11() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree11.style.display = "block";
    logo.style.display = "block";
    chapterThree11.style.width = "88%";
    chapterThree11.style.top = "42%";
}

function showThreeChapter12() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree12.style.display = "block";
    logo.style.display = "block";
    chapterThree12.style.width = "88%";
    chapterThree12.style.top = "45%";
}

function showThreeChapter13() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree13.style.display = "block";
    logo.style.display = "block";
    chapterThree13.style.width = "91%";
    chapterThree13.style.top = "42%";
}

function showThreeChapter14() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree14.style.display = "block";
    logo.style.display = "block";
    chapterThree14.style.width = "92%";
    chapterThree14.style.top = "42%";
}

function showThreeChapterGame2() {
    hideAllScreens();

    titleGame.style.display = "block";
    titleGame.style.width = "100%";
    titleGame.style.top = "24%";
    logo.style.zIndex = "3";
    logo.style.display = "block";
    container = document.querySelector('.game-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'game-container';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.pointerEvents = "none";

        container.style.alignItems = 'center';
        container.style.marginTop = '0.5vh';
        container.style.marginBottom = '0.5vh';

        // הקונטיינר לא חוסם את החצים
        container.style.position = "relative";
        container.style.zIndex = "1";
        document.body.appendChild(container);
    }

    container.innerHTML = ""; // מנקה תוכן קודם
    // יצירת ה-Overlay וה-Modal (עם סגנון בסיסי כדי שזה יעבוד מיד)
    const overlay = document.createElement("div");
    overlay.id = "game-overlay";
    overlay.style.display = "none";           // מוסתר בהתחלה
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.55)";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "999";

    // הקונטיינר של ההוראות
    const modal = document.createElement("div");
    modal.id = "instructions-modal";
    // אם יש לך CSS חיצוני, ניתן להוציא שורות אלו
    modal.style.background = "#fff";
    modal.style.width = "70vw";
    modal.style.maxWidth = "900px";
    modal.style.padding = "30px";
    modal.style.borderRadius = "16px";
    modal.style.position = "relative";
    modal.style.direction = "rtl";

    // כפתור סגירה (נשאר יציב ב-DOM)
    const closeBtn = document.createElement("div");
    closeBtn.id = "close-instructions";
    closeBtn.textContent = "X";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "12px";
    closeBtn.style.left = "16px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "28px";
    closeBtn.style.color = "#5f8c90";
    modal.appendChild(closeBtn);

    // הוספת התמונה והטקסט בלי להשתמש ב-innerHTML +=
    modal.insertAdjacentHTML("beforeend", `
  <img src="media/introGame.svg" alt="הוראות משחק" style="width:100%; margin-bottom:10px;">
`);

    // מחברים ל-DOM
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // יצירת כפתור "הוראות משחק" (כמו שלך)
    const buttonGame = document.createElement("button");
    buttonGame.textContent = "הוראות משחק";
    buttonGame.classList.add("button-game");
    buttonGame.style.zIndex = "5";
    container.appendChild(buttonGame);
    buttonGame.style.pointerEvents = "auto";

    buttonGame.addEventListener("click", () => {
        overlay.style.display = "flex";
        // חסימת לחיצות על האלמנטים שמאחורי ה-overlay:
        container.style.pointerEvents = "none";
    });

    // סגירה - ה-event listener על closeBtn יספיק ועכשיו לא יאבד
    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        container.style.pointerEvents = "auto";
    });


    const nextArrow = document.getElementById("nextArrow");
    const prevArrow = document.getElementById("prevArrow");

    if (nextArrow) {
        nextArrow.style.position = "fixed";
        nextArrow.style.zIndex = "9999";
    }

    if (prevArrow) {
        prevArrow.style.position = "fixed";
        prevArrow.style.zIndex = "9999";
    }

    const blueCardsData = [
        "כיוון פתיחת דלת הדף",
        "איזה דלת מתאימה לעובי קיר של 20 ס'מ",
        "איזה דלת מתאימה לעובי של 30 ס'מ",
        "מרחק מינימלי בין דלת לקיר ניצב (פנימי)",
        "גובה דלת ממ'ד",
        "איזה רוחב אפשרי לדלת הדף דירתית"
    ];

    const yellowCardsData = [
        'פנימה',
        'החוצה',
        '15 ס"מ',
        '215 ס"מ',
        '200 ס"מ',
        '70 ס"מ',
        'דלת הדף דירתית',
        '100 ס"מ',
        '90 ס"מ',
        'דלת דלית "נגררת"',
        '10 ס"מ'
    ];

    window.correctMap = {
        'איזה רוחב אפשרי לדלת הדף דירתית': '70 ס"מ',
        'גובה דלת הממ"ד': '200 ס"מ',
        'מרחק מינימלי בין דלת לקיר ניצב (פנימי)': '10 ס"מ',
        'איזה דלת מתאימה לעובי קיר של 30 ס"מ': 'דלת דלית נגררת',
        'איזה דלת מתאימה לעובי קיר של 20 ס"מ': 'דלת הדף "נגררת"',
        'כיוון פתיחת הדלת': 'החוצה'
    };

    const blueArea = document.createElement('div');
    blueArea.className = 'blue-area';
    blueArea.style.display = 'flex';
    blueArea.style.alignItems = 'center';
    container.appendChild(blueArea);

    blueCardsData.forEach(text => {
        const card = document.createElement('div');
        card.className = 'blue-card';
        card.dataset.key = text;
        card.textContent = text;
        card.style.pointerEvents = "auto";
        card.style.padding = "2vw 1vh";
        card.style.margin = "6vw 2vh";
        card.style.textAlign = "center";
        card.draggable = true;
        card.addEventListener('dragstart', onDragStart);
        card.addEventListener('dragend', onDragEnd);
        blueArea.appendChild(card);
    });

    const yellowArea = document.createElement('div');
    yellowArea.className = 'yellow-area';
    yellowArea.style.display = 'flex';
    yellowArea.style.flexDirection = 'column';
    yellowArea.style.alignItems = 'center';
    container.appendChild(yellowArea);
    const row1 = document.createElement('div');
    const row2 = document.createElement('div');
    row1.className = 'yellow-row';
    row2.className = 'yellow-row';
    row1.style.display = 'flex';
    row1.style.gap = '10px';
    row2.style.display = 'flex';
    row2.style.gap = '10px';
    yellowArea.appendChild(row1);
    yellowArea.appendChild(row2);
    yellowCardsData.forEach((text, i) => {
        const card = document.createElement('div');
        card.className = 'yellow-card';
        card.textContent = text;
        card.dataset.value = text;
        card.style.pointerEvents = "auto";
        card.style.padding = "2vw 1vh";
        card.style.width = "10vw";
        card.style.textAlign = "center";
        card.style.margin = "0.5vw 0.5vh";
        card.addEventListener('dragover', e => e.preventDefault());
        card.addEventListener('drop', onDrop);
        (i < 6 ? row1 : row2).appendChild(card);
    });
}

function onDragStart2(e) {
    e.dataTransfer.setData('text/plain', e.currentTarget.dataset.key);
    e.currentTarget.classList.add('dragging');
}

function onDragEnd2(e) {
    e.currentTarget.classList.remove('dragging');
}

function onDrop2(e) {
    e.preventDefault();
    const draggedKey = e.dataTransfer.getData('text/plain');
    const targetValue = e.currentTarget?.dataset?.value;
    if (!draggedKey || !targetValue) return;
    const blueCard = document.querySelector(`.blue-card[data-key='${draggedKey}']`);
    if (!blueCard) return;
    e.currentTarget.style.position = "relative";
    e.currentTarget.querySelectorAll('.true-icon, .false-icon').forEach(icon => icon.remove());
    const addIconAndText = (isCorrect, card) => {
        if (!blueCard || !card) return;
        if (isCorrect) {
            card.style.width = "";
            card.style.height = "";
            card.textContent = blueCard.textContent;
            card.style.backgroundColor = "#dbf6fa";
            blueCard.style.display = "none";
        }
        const icon = document.createElement("img");
        icon.src = isCorrect ? "media/trueIcon.svg" : "media/FalseIcon.svg";
        icon.style.position = "absolute";
        icon.style.right = "6px";
        icon.style.bottom = "6px";
        icon.classList.add(isCorrect ? "true-icon" : "false-icon");
        card.appendChild(icon);
    };

    const targetCard = e.currentTarget;
    if (window.correctMap[draggedKey] === targetValue) {
        addIconAndText(true, targetCard);
    } else {
        console.log("לא נכון!");
        addIconAndText(false, targetCard);

        setTimeout(() => {
            icon.style.display = "none";
        }, 2000);
    }
}

function showThreeChapter15() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterThree15.style.display = "block";
    logo.style.display = "block";
    chapterThree15.style.width = "69%";
    chapterThree15.style.top = "40%";
}

function showchapterFour() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour.style.display = "block";
    logo.style.display = "block";
    chapterFour.style.width = "46%";
    chapterFour.style.top = "46%";
}

function showchapterFour1() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour1.style.display = "block";
    logo.style.display = "block";
    chapterFour1.style.width = "80%";
    chapterFour1.style.top = "40%";
}

function showchapterFour2() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour2.style.display = "block";
    logo.style.display = "block";
    chapterFour2.style.width = "78%";
    chapterFour2.style.top = "40%";
}

function showchapterFour3() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour3.style.display = "block";
    logo.style.display = "block";
    chapterFour3.style.width = "69%";
    chapterFour3.style.top = "5%";
    chapterFour3.style.left = "60%";
    chapterFour3.style.transform = "translateX(-50%)";
    chapterFour3.style.right = "unset";
}

function showchapterFour4() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour4.style.display = "block";
    logo.style.display = "block";
    chapterFour4.style.top = "5%";
    chapterFour4.style.width = "68%";
    chapterFour4.style.right = "15%";   // הזיזי ימינה כמה שצריך
    chapterFour4.style.left = "unset";
    chapterFour4.style.transform = "none";

}

function showchapterFour5() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour5.style.display = "block";
    logo.style.display = "block";
    chapterFour5.style.width = "77%";
    chapterFour5.style.top = "5%";
    chapterFour5.style.right = "4%";
    chapterFour5.style.left = "unset";
    chapterFour5.style.transform = "none";
}

function showchapterFour6() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour6.style.display = "block";
    logo.style.display = "block";
    chapterFour6.style.width = "77%";
    chapterFour6.style.top = "5%";
    chapterFour6.style.right = "4%";
    chapterFour6.style.left = "unset";
    chapterFour6.style.transform = "none";
}

function showchapterFour7() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour7.style.display = "block";
    logo.style.display = "block";
    chapterFour7.style.width = "91%";
    chapterFour7.style.top = "46%";
}

function showchapterFour8() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour8.style.display = "block";
    logo.style.display = "block";
    chapterFour8.style.width = "90%";
    chapterFour8.style.top = "46%";
}

function showchapterFour9() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour10.style.display = "block";
    logo.style.display = "block";
    chapterFour10.style.width = "70%";
    chapterFour10.style.top = "46%";
    box2.style.display = "block";

}

// function showchapterFour10() {
//     hideAllScreens();
//     logo.style.zIndex = "3";
//     chapterFour10.style.display = "block";
//     logo.style.display = "block";
//     chapterFour10.style.width = "90%";
//     chapterFour10.style.top = "46%";
// }

function showchapterFour11() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour11.style.display = "block";
    logo.style.display = "block";
    chapterFour11.style.width = "90%";
    chapterFour11.style.top = "46%";
}

function showchapterFour12() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour12.style.display = "block";
    logo.style.display = "block";
    chapterFour12.style.width = "90%";
    chapterFour12.style.top = "46%";
}

function showchapterFour13() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour13.style.display = "block";
    logo.style.display = "block";
    chapterFour13.style.width = "85%";
    chapterFour13.style.top = "46%";
}

function showchapterFour14() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour14.style.display = "block";
    logo.style.display = "block";
    chapterFour14.style.width = "85%";
    chapterFour14.style.top = "46%";
}

function showchapterFour15() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFour15.style.display = "block";
    logo.style.display = "block";
    chapterFour15.style.width = "78%";
    chapterFour15.style.top = "40%";
}

function showchapterFifth() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFifth.style.display = "block";
    logo.style.display = "block";
    chapterFifth.style.width = "60%";
    chapterFifth.style.top = "46%";
}

function showchapterFifth1() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFifth1.style.display = "block";
    logo.style.display = "block";
    chapterFifth1.style.width = "85%";
    chapterFifth1.style.top = "35%";
}
function showchapterFifth2() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFifth2.style.position = "absolute"; // חשוב!
    chapterFifth2.style.display = "block";
    logo.style.display = "block";
    chapterFifth2.style.width = "78%"; // רוחב מתאים
    chapterFifth2.style.top = "40%";
    chapterFifth2.style.right = "0";
    chapterFifth2.style.left = "auto";
}


function showchapterFifth3() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFifth3.style.display = "block";
    logo.style.display = "block";
    chapterFifth3.style.width = "60%";
    chapterFifth3.style.top = "46%";
}

function showchapterFifth4() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFifth4.style.display = "block";
    logo.style.display = "block";
    chapterFifth4.style.width = "74%";
    chapterFifth4.style.top = "46%";
}

function showchapterFifth5() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFifth5.style.display = "block";
    logo.style.display = "block";
    chapterFifth5.style.width = "64%";
    chapterFifth5.style.top = "38%";
}

function showchapterFifth6() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFifth6.style.display = "block";
    logo.style.display = "block";
    chapterFifth6.style.width = "57%";
    chapterFifth6.style.top = "42%";
    // chapterFifth6.style.right = "5%";
}

function showchpterFifthGame1() {
    hideAllScreens();

    logo.style.zIndex = "3";
    logo.style.display = "block";
    chpterFifthGame1.style.display = "block";
    gameFifthAns.style.display = "none";

    const correctAnswer = "225 ס\"מ";
    const answers = ["225 ס\"מ", "235 ס\"מ", "230 ס\"מ"];
    gameContainer.style.display = "block";
    chpterFifthGame1.style.width = "100%";
    chpterFifthGame1.style.height = "auto";

    gameContainer.appendChild(chpterFifthGame1);

    gameFifthAns.style.width = "100%";
    gameFifthAns.style.height = "auto";
    gameFifthAns.style.display = "none";
    gameContainer.appendChild(gameFifthAns);
    answersContainer.style.display = "flex";
    gameContainer.appendChild(answersContainer);
    answersContainer.innerHTML = ""; // מחיקת כפתורים ישנים
    answers.forEach(text => {
        const btn = document.createElement("button");
        btn.innerText = text;
        btn.classList.add("btn-game2"); // מחלקה לעיצוב

        btn.onclick = () => {
            answersContainer.querySelectorAll("button").forEach(b => {
                b.style.backgroundColor = "#cce6e6";
                b.style.color = "#61888d";
            });
            if (text === correctAnswer) {
                btn.style.backgroundColor = "#9caf85"; // ירוק
                btn.style.color = "#e6e6e6";
            } else {
                btn.style.backgroundColor = "#923b3b"; // אדום
                btn.style.color = "#e6e6e6";
            }
            chpterFifthGame1.style.display = "none";
            gameFifthAns.style.display = "block";
        };
        answersContainer.appendChild(btn);
    });
    createNewIntroGameButton();
}

function showchpterFifthGame2() {
    hideAllScreens();
    logo.style.zIndex = "3";
    logo.style.display = "block";
    chpterFifthGame2.style.display = "block";
    gameFifthAns.style.display = "none";
    const correctAnswer = "60";
    const answers = ["80", "40", "60"];
    gameContainer.style.display = "block";
    chpterFifthGame2.style.width = "80%";
    chpterFifthGame2.style.height = "auto";
    gameContainer.appendChild(chpterFifthGame2);
    answersContainer.style.display = "flex";
    gameContainer.appendChild(answersContainer);
    answersContainer.innerHTML = ""; // מחיקת כפתורים ישנים

    answers.forEach(text => {
        const btn = document.createElement("button");
        btn.innerText = text;
        btn.classList.add("btn-game2"); // מחלקה לעיצוב

        btn.onclick = () => {
            answersContainer.querySelectorAll("button").forEach(b => {
                b.style.backgroundColor = "#cce6e6";
                b.style.color = "#61888d";
            });
            if (text === correctAnswer) {
                btn.style.backgroundColor = "#9caf85"; // ירוק
                btn.style.color = "#e6e6e6";
            } else {
                btn.style.backgroundColor = "#923b3b"; // אדום
                btn.style.color = "#e6e6e6";
            }
        };
        answersContainer.appendChild(btn);
    });
    createNewIntroGameButton();
}

function showchpterFifthGame3() {
    hideAllScreens();

    logo.style.zIndex = "3";
    logo.style.display = "block";
    chpterFifthGame3.style.display = "block";
    gameFifthAns.style.display = "none";
    const correctAnswer = "180";
    const answers = ["200", "180", "190"];
    gameContainer.style.display = "block";
    chpterFifthGame3.style.width = "80%";
    chpterFifthGame3.style.height = "auto";
    gameContainer.appendChild(chpterFifthGame3);
    answersContainer.style.display = "flex";
    gameContainer.appendChild(answersContainer);
    answersContainer.innerHTML = ""; // מחיקת כפתורים ישנים
    answers.forEach(text => {
        const btn = document.createElement("button");
        btn.innerText = text;
        btn.classList.add("btn-game2"); // מחלקה לעיצוב
        btn.onclick = () => {
            answersContainer.querySelectorAll("button").forEach(b => {
                b.style.backgroundColor = "#cce6e6";
                b.style.color = "#61888d";
            });
            if (text === correctAnswer) {
                btn.style.backgroundColor = "#9caf85"; // ירוק
                btn.style.color = "#e6e6e6";
            } else {
                btn.style.backgroundColor = "#923b3b"; // אדום
                btn.style.color = "#e6e6e6";
            }
        };
        answersContainer.appendChild(btn);
    });
    createNewIntroGameButton();
}
function createNewIntroGameButton() {

    button.style.display = "block";
    let overlay = document.getElementById("introGameOverlayFifth");
    if (overlay) return;
    overlay = document.createElement("div");
    overlay.id = "introGameOverlayFifth";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.55)";
    overlay.style.display = "none";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "999";
    overlay.style.flexDirection = "column";
    const modal = document.createElement("div");
    modal.style.background = "#fff";
    modal.style.padding = "30px";
    modal.style.borderRadius = "16px";
    modal.style.width = "70vw";
    modal.style.maxWidth = "900px";
    modal.style.position = "relative";
    modal.style.direction = "rtl";
    const closeBtn = document.createElement("div");
    closeBtn.textContent = "X";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "12px";
    closeBtn.style.left = "16px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "28px";
    closeBtn.style.color = "#5f8c90";
    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
    });
    const img = document.createElement("img");
    img.src = "media/introGameChapterFifth.svg";
    img.alt = "הוראות משחק";
    img.style.width = "70%";
    modal.appendChild(closeBtn);
    modal.appendChild(img);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    button.addEventListener("click", () => {
        overlay.style.display = "flex";
    });
}

function showchapterFifth7() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFifth7.style.display = "block";
    logo.style.display = "block";
    chapterFifth7.style.width = "85%";
    chapterFifth7.style.top = "46%";
}

function showchapterFifth8() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFifth8.style.display = "block";
    logo.style.display = "block";
    chapterFifth8.style.width = "75%";
    chapterFifth8.style.top = "46%";
}

function showchapterFifth9() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFifth9.style.display = "block";
    logo.style.display = "block";
    chapterFifth9.style.width = "85%";
    chapterFifth9.style.top = "46%";
}

function showchapterFifth10() {
    hideAllScreens();
    logo.style.zIndex = "3";
    chapterFifth10.style.display = "block";
    logo.style.display = "block";
    chapterFifth10.style.width = "49%";
    chapterFifth10.style.top = "45%";
}
