function updateGateVisualState() {
    const card = document.getElementById('timeLockAlert');
    const chk = document.getElementById('forceUnlock');
    if (!card || !chk) return;
    const t = I18N[currentLang] || I18N.ru;
    const active = chk.checked;
    card.classList.toggle('urgent-active', active);
    setTextSafe('gateTitleText', active ? t.gateUrgentTitle : t.gateClosedTitle);
    setTextSafe('gateTimeChipText', active ? t.gateUrgentTime : t.gateClosedTime);
    setTextSafe('gateDescText', active ? t.gateUrgentDesc : t.gateClosedDesc);
    setTextSafe('gateSwitchLabelText', t.gateSwitchLabel);
  }


  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyNIb0lkUJHSGm5Wi6yzJgUM2jBZa_ORYkoNdT070gBrcrb4TnOWrURjbTdV-Er-j6r/exec";
  const tg = window.Telegram.WebApp;

  tg.ready();
  tg.expand();
  if (typeof tg.disableVerticalSwipes === 'function') {
    tg.disableVerticalSwipes();
  }
  tg.setHeaderColor('#F5F5F7');
  tg.setBackgroundColor('#F5F5F7');

  document.addEventListener('gesturestart', e => e.preventDefault());
  document.addEventListener('gesturechange', e => e.preventDefault());
  document.addEventListener('touchmove', e => {
    if (e.touches.length > 1) e.preventDefault();
  }, { passive: false });

  const I18N = {
    ru: {
      appName: "Zhannur Заявки",
      statusOpen: "Прием заявок открыт (до 17:00)",
      statusClosed: "Прием заявок Пн–Пт 09:00–17:00",
      fabCreate: "Подать заявку",
      dockNew: "Заявка",
      dockPromo: "Акция",
      dockMy: "Мои",
      dockCab: "Кабинет",
      gateClosedTitle: "Согласование временно закрыто",
      gateClosedTime: "Открытие в 17:00",
      gateClosedDesc: "Сейчас доступен предварительный просмотр заявок.",
      gateUrgentTitle: "Срочное согласование активно",
      gateUrgentTime: "Доступ разблокирован",
      gateUrgentDesc: "Вы можете согласовывать и отклонять заявки до 17:00.",
      gateSwitchLabel: "Разблокировать срочное согласование",
      closedTitle: "Прием новых заявок сейчас закрыт",
      closedDesc: "Подача электронных заявок доступна строго по будням с <b>09:00 до 17:00</b>.",
      closedSchedule: "<b>График работы сервиса:</b><br>• Подача заявок: <b>Пн – Пт, с 09:00 до 17:00</b><br>• Согласование: <b>Администратор → Инженер → Директор</b><br>• Выходные (Сб, Вс): <b>прием заявок закрыт</b>",
      viewMyBtn: "Посмотреть мои заявки →",
      st1: "Этаж", st2: "Ваше ИП", st3: "Работы", st4: "Пропуск",
      step1Title: "Выберите этаж", step1Desc: "Укажите этаж, на котором расположено ваше ИП или ТОО.",
      fl1: "1 этаж", fl2: "2 этаж", fl3: "3 этаж", fl4: "4 этаж",
      flStreet: "Улица / Банки", flSub: "Подрядчик", flSubDesc: "Новый арендатор",
      step2Title: "Выберите ваше ИП / ТОО", step2Desc: "Найдите свою организацию в списке этажа или введите вручную.",
      step3Title: "Вид работ, время и срок", step3Desc: "Выберите тип заявки и разрешенное окно времени.",
      wImportGoods: "Ввоз товара", wExportGoods: "Вывоз товара", wBothGoods: "Ввоз и вывоз товара",
      wImportEq: "Ввоз оборудования", wExportEq: "Вывоз оборудования", wNight: "Ночные работы (ревизия, уборка)",
      timeLabel: "Время проведения работ", durationLabel: "Срок действия заявки:",
      startDateLabel: "Дата начала", endDateLabel: "Дата окончания",
      step4Title: "Подтверждение заявки", step4Desc: "Согласуют Администратор и Инженер, утверждает Директор.",
      passChainSub: "Согласование: Админ → Инженер → Директор",
      respLabel: "ФИО, должность и телефон ответственного",
      workersLabel: "ФИО всех сотрудников",
      carLabel: "Госномер автомобиля (если известен)",
      myReqTitle: "Мои заявки",
      nextBtn: "Далее →", submitBtn: "Отправить заявку ✓", prevBtn: "← Назад"
    },
    kk: {
      appName: "Zhannur Өтінімдер",
      statusOpen: "Өтінім қабылдау ашық (17:00-ге дейін)",
      statusClosed: "Өтінім қабылдау Дс–Жм 09:00–17:00",
      fabCreate: "Өтінім беру",
      dockNew: "Өтінім",
      dockPromo: "Акция",
      dockMy: "Менің",
      dockCab: "Кабинет",
      gateClosedTitle: "Келісу уақытша жабық",
      gateClosedTime: "17:00-де ашылады",
      gateClosedDesc: "Қазір өтінімдерді алдын ала қарауға болады.",
      gateUrgentTitle: "Жедел келісу белсенді",
      gateUrgentTime: "Қолжетімділік ашық",
      gateUrgentDesc: "Өтінімдерді 17:00-ге дейін келісуге немесе қабылдамауға болады.",
      gateSwitchLabel: "Жедел келісуді ашу",
      closedTitle: "Жаңа өтінімдерді қабылдау қазір жабық",
      closedDesc: "Электрондық өтінімдер тек жұмыс күндері <b>09:00-ден 17:00-ге дейін</b> қабылданады.",
      closedSchedule: "<b>Сервис жұмыс кестесі:</b><br>• Өтінім беру: <b>Дс – Жм, 09:00 – 17:00</b><br>• Келісу: <b>Әкімші → Инженер → Директор</b><br>• Демалыс (Сб, Жс): <b>қабылдау жабық</b>",
      viewMyBtn: "Менің өтінімдерімді көру →",
      st1: "Қабат", st2: "Сіздің ЖК", st3: "Жұмыс", st4: "Рұқсаттама",
      step1Title: "Қабатты таңдаңыз", step1Desc: "Сіздің ЖК немесе ЖШС орналасқан қабатты көрсетіңіз.",
      fl1: "1-қабат", fl2: "2-қабат", fl3: "3-қабат", fl4: "4-қабат",
      flStreet: "Көше / Банктер", flSub: "Мердігер", flSubDesc: "Жаңа жалға алушы",
      step2Title: "ЖК / ЖШС таңдаңыз", step2Desc: "Тізімнен ұйымыңызды табыңыз немесе қолмен жазыңыз.",
      step3Title: "Жұмыс түрі, уақыты және мерзімі", step3Desc: "Өтінім түрін және рұқсат етілген уақыт аралығын таңдаңыз.",
      wImportGoods: "Тауар әкелу", wExportGoods: "Тауар әкету", wBothGoods: "Тауар әкелу және әкету",
      wImportEq: "Жабдық әкелу", wExportEq: "Жабдық әкету", wNight: "Түнгі жұмыстар (ревизия, тазалау)",
      timeLabel: "Жұмыс жүргізу уақыты", durationLabel: "Өтінімнің жарамдылық мерзімі:",
      startDateLabel: "Басталу күні", endDateLabel: "Аяқталу күні",
      step4Title: "Өтінімді растау", step4Desc: "Әкімші мен Инженер келіседі, Директор бекітеді.",
      passChainSub: "Келісу: Әкімші → Инженер → Директор",
      respLabel: "Жауапты тұлғаның ТАӘ, лауазымы және телефоны",
      workersLabel: "Барлық қызметкерлердің ТАӘ",
      carLabel: "Көліктің мемлекеттік нөмірі (белгілі болса)",
      myReqTitle: "Менің өтінімдерім",
      nextBtn: "Келесі →", submitBtn: "Өтінімді жіберу ✓", prevBtn: "← Артқа"
    }
  };

  let currentLang = localStorage.getItem('jannurLang') || 'ru';
  let TENANTS_DB = {"1": ["Даниал ИП А1", "ИП Нурсултанова Shapki А2", "ТОО Bellas Pure парфюм А2/1", "Витайм аптека А3", "AlkorKazakhstanLtd ЛЭТУАЛЬ А4", "ИП Kelo Zhanna Kosmetic А5", "РТС Cosmart А6", "Биринши Lombard А7", "ИП Sandi А7/1", "Посуда Долголетия Fissman А8", "BBCorp Asyq toys А9", "TapTatti Retail А10", "Bizdin Et А11", "ИП Мино канцелярия А13", "Химчистка А14", "Гала-Косметик и К (быт. химия) А15", "ИП Khan fish А16", "Толганай ИП (сухофрукты) А17", "ИП Ayim А18", "MISKBAR ИП А19", "B-Rent Service (ломбард) А20", "KULINAR&CA. ИП Данабаев A21", "Тулеуов ИП Royal Coffee А22", "ИП Ернур (зебра) А23", "ИП Нади (оптика) А25", "REFORMA ИП (бижутерия) А27", "ИП Пернебаева А28", "Муздубаева Ш.Н. (вояж) ИП А31", "ИП SJ GROUP островок A36", "ТОО Скиф Трейд Смол", "Иманбаев (аквафор)", "Nur DORO (парфюм на разл) островок", "Абилов Руслан Эдигизович ИП", "Кучер Е.А. островок", "БРИТИШ АМЕРИКАН ТОБАККО островок", "Бельдеубаева ИП (кофе аппарат)", "ИП Атош островок", "ИП Яковенко островок", "ИП888", "ИП Куттыходжаева Балисмаил"], "2": ["Бэст Прайс Казахстан В1", "Белкин ИП (муж. одежда) В2", "Львова Валентина Николаевна В3", "Жетписбаев О.К. (муж. одежда) В4", "Авилов А.З. ИП (Lietta) В5", "Айрапетян К.Ж. ИП В6", "ИП Бекмухамбетова В7", "ИП Дильназ В8", "ИП Бауыржанов В9", "Щербинина И.Б. ИП (одежда) В10", "Артеменко Ирина Аркадьевна ИП В11", "Торговый дом «ЗОЛОТО МОСКВЫ» В12", "Аргента ТОО (юв. изд.) В13", "ДН Казахстан ТОО (юв. изд.) В14", "Рахимов ИП (COSSMO) В15", "Хамулло В.И. ИП В16", "Дюсенов Рамил Алемханович В17", "Дарын ИП В18", "Савицкая Лилия Темирбаевна В19", "ИП Дигимбаева В20", "Жакаева ИП В21", "Respect Retail Group В22", "ИП САТЫБАЛДИЕВ B24", "Адильханова ИП В25", "Аубакирова ИП В26", "Ермакова Е. А. ИП В27", "КАРИ КЗ ТОО В28", "Куанова Алия Жакеновна Отбасы банк"], "3": ["ТОО LPP Kazakhstan С1", "ИП Турушов С3", "ИП Нур-Али С4", "ИП Safa С5", "ИП Каженова С6", "ИП Болат С7", "ИП Баймагзумов С8", "ИП Омарова С9", "ИП Бекишева С10", "ИП Заришняк С14", "ИП Маркова С15", "ИП Береке2010 С15/1", "ИП Байжанова С16", "ИП Валиева С17", "ИП Бакишева С19", "ИП Жапар С24", "ТОО Калашникова С25", "ИП Asylai С26", "ИП Какетка С27", "ИП Данеля С28", "ИП АРАПАТ С29", "ИП Ержанова С30", "ИП Дина С31", "ИП Mәсілхан", "ИП Балыкова", "ИП Темирханова"], "4": ["Толенова ИП", "Анара ИП (Donix hub)", "ИП Айтжанова (Смак)", "ИП Firdaus", "Нуралы ИП (массаж. кресла)", "ИП Назарбекова (салон красоты)", "ТОО Маргарита", "ИП Проскурякова", "ИП Айка", "Maki-Maki", "ИП Кадырова", "ИП ALTUN", "ИП Нурпеисов"], "Улица и Банкоматы": ["АЛЕКСИЯ ИП", "Soul Food ИП", "Тойчу Кызы Аймончок ИП", "Толешова ИП", "Bereke Bank АО", "ALATAU BANK", "Народный банк Казахстана АО", "Cash Invest ТОО (терминал)", "Банк ЦентрКредит ДБ АО", "Филиал АО Каспи банк", "Каспи Магазин ТОО (Жаннур, постамат)", "Freedom Telecom Operations ТОО"]};

  const currentUser = tg.initDataUnsafe?.user || { id: 0 };
  const initDataRaw = tg.initData || "";

  let state = {
    step: 1,
    floor: "",
    organization: "",
    isManualOrg: false,
    workType: "",
    workTime: "9:00-11:00"
  };

  let currentViewName = "wizard";
  let approvalDisplayMode = "list"; // 'list' | 'swipe'
  let myReqFilterMode = "all";
  let cabListFilterMode = "all";
  let emergencyMinutes = 15;
  let emergencyUntilMs = 0;

  let myRequests = [];
  let myPromos = [];
  let pendingRequests = [];
  let allRequestsRegistry = [];
  let registryFilterMode = "all";
  let pendingPromoRejectRowIndex = null;
  let forcePromoManualPicker = false;
  let activeMarketerTab = "promos";
  let approversList = [];
  let tenantRules = {};
  let securityToday = [];
  let securityTomorrow = [];
  let kppLogUrl = "";
  let lastScannedPass = null;
  let cabinetAccounts = [];
  let cabinetAll = [];
  let bannersList = [];
  let bannerIntervalSec = 7;
  let activeBannerIdx = 0;
  let bannerTimerId = null;
  let promoRequests = [];
  let violationActsList = [];
  let selectedActPenalty = "предупреждение";
  let selectedActPhotos = [];
  let promoFilterMode = "all";
  let selectedPromoMedia = [];
  let pendingBannerImage = { dataUrl: "", name: "" };
  let securityDates = { today: "", tomorrow: "" };
  let guardDayMode = "today";
  let guardFilterMode = "all";
  let isApprover = false;
  let hasInitialAppLoaded = false;
  let userRole = "";
  let userStaffName = "";
  let pendingRejectCard = null;
  let pendingRejectReq = null;

  function haptic(type = 'light') {
    if (tg.HapticFeedback) tg.HapticFeedback.impactOccurred(type);
  }

  function setBadgeCount(elId, count) {
    const el = document.getElementById(elId);
    if (!el) return;
    const num = Number(count) || 0;
    el.textContent = num;
    el.classList.toggle('zero', num <= 0);
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('jannurLang', lang);
    document.getElementById('langRuBtn').classList.toggle('active', lang === 'ru');
    document.getElementById('langKkBtn').classList.toggle('active', lang === 'kk');
    applyTranslations();
    haptic('light');
  }

  function setTextSafe(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }
  function setHtmlSafe(id, val) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  }
  function applyTranslations() {
    const t = I18N[currentLang] || I18N.ru;
    setTextSafe('headerAppNameText',  t.appName);
    setTextSafe('fabCreateText',  t.fabCreate);
    setTextSafe('tDockNewLbl',  t.dockNew);
    if (document.getElementById('tDockPromoLbl')) setTextSafe('tDockPromoLbl',  t.dockPromo);
    setTextSafe('tDockMyLbl',  t.dockMy);
    setTextSafe('tDockCabLbl',  t.dockCab);

    setTextSafe('closedTitleText',  t.closedTitle);
    setHtmlSafe('closedDescText', t.closedDesc);
    setHtmlSafe('closedScheduleBox', t.closedSchedule);
    setTextSafe('closedViewMyBtn',  t.viewMyBtn);

    setTextSafe('st1Label',  t.st1);
    setTextSafe('st2Label',  t.st2);
    setTextSafe('st3Label',  t.st3);
    setTextSafe('st4Label',  t.st4);

    setTextSafe('step1Title',  t.step1Title);
    setTextSafe('step1Desc',  t.step1Desc);
    setTextSafe('fl1Name',  t.fl1);
    setTextSafe('fl2Name',  t.fl2);
    setTextSafe('fl3Name',  t.fl3);
    setTextSafe('fl4Name',  t.fl4);
    setTextSafe('flStreetName',  t.flStreet);
    setTextSafe('flSubName',  t.flSub);
    setTextSafe('flSubDesc',  t.flSubDesc);

    setTextSafe('step2Title',  t.step2Title);
    setTextSafe('step2Desc',  t.step2Desc);

    setTextSafe('step3Title',  t.step3Title);
    setTextSafe('step3Desc',  t.step3Desc);
    setTextSafe('wImportGoodsTitle',  t.wImportGoods);
    setTextSafe('wExportGoodsTitle',  t.wExportGoods);
    setTextSafe('wBothGoodsTitle',  t.wBothGoods);
    setTextSafe('wImportEqTitle',  t.wImportEq);
    setTextSafe('wExportEqTitle',  t.wExportEq);
    setTextSafe('wNightTitle',  t.wNight);

    setHtmlSafe('timeFieldLabel', `${t.timeLabel} <span class="req">*</span>`);
    setTextSafe('durationFieldLabel',  t.durationLabel);
    setHtmlSafe('startDateLabel', `${t.startDateLabel} <span class="req">*</span>`);
    setHtmlSafe('endDateLabel', `${t.endDateLabel} <span class="req">*</span>`);

    setTextSafe('step4Title',  t.step4Title);
    setTextSafe('step4Desc',  t.step4Desc);
    setTextSafe('passChainSub',  t.passChainSub);
    setHtmlSafe('respFieldLabel', `${t.respLabel} <span class="req">*</span>`);
    setHtmlSafe('workersFieldLabel', `${t.workersLabel} <span class="req" id="workersReq" style="display:${state.workType.includes('Ночные') ? 'inline' : 'none'}">*</span>`);
    setTextSafe('carFieldLabel',  t.carLabel);

    setTextSafe('myReqTitle',  t.myReqTitle);
    setTextSafe('prevBtn',  t.prevBtn);
    setTextSafe('nextBtn',  state.step === 4 ? t.submitBtn : t.nextBtn);

    const isKk = currentLang === 'kk';
    const splashSub = document.getElementById('splashSubText');
    if (splashSub) splashSub.textContent = isKk ? "Жүктелуде..." : "Загрузка...";

    const mySubPermits = document.getElementById('mySubPermitsBtn');
    if (mySubPermits) {
      const cnt = document.getElementById('myPermitsTabCnt')?.textContent || '0';
      mySubPermits.innerHTML = `${isKk ? 'Рұқсаттамалар' : 'Пропуска'} (<span id="myPermitsTabCnt">${cnt}</span>)`;
    }
    const mySubPromos = document.getElementById('mySubPromosBtn');
    if (mySubPromos) {
      const cnt = document.getElementById('myPromosTabCnt')?.textContent || '0';
      mySubPromos.innerHTML = `${isKk ? 'Акциялар' : 'Акции'} (<span id="myPromosTabCnt">${cnt}</span>)`;
    }

    const promoHeading = document.querySelector('#promoView .section-title');
    if (promoHeading) promoHeading.textContent = isKk ? "СО Әлеуметтік желісіндегі акция" : "Акция в соцсети ТРЦ";
    const promoSubHead = document.querySelector('#promoView .section-title + div');
    if (promoSubHead) promoSubHead.textContent = isKk ? "«Жаннур» СОО барлық жалға алушыларына қолжетімді" : "Доступно всем арендаторам ТРЦ «Жаннур»";
    const promoCardTitle = document.querySelector('#promoView .card-title');
    if (promoCardTitle) promoCardTitle.textContent = isKk ? "📣 Маркетологқа акция жіберу" : "📣 Подать акцию маркетологу";
    const promoCardDesc = document.querySelector('#promoView .card-desc');
    if (promoCardDesc) promoCardDesc.textContent = isKk
      ? "Өткізу күндерін көрсетіңіз, акция мәнін жазып, фото немесе видео тіркеңіз — маркетолог СОО әлеуметтік желілеріне жариялайды."
      : "Укажите даты проведения, опишите суть акции и прикрепите фото или видео — маркетолог разместит публикацию в соцсетях ТРЦ.";
    const submitPromoBtn = document.getElementById('submitPromoBtn');
    if (submitPromoBtn && !submitPromoBtn.disabled) {
      submitPromoBtn.textContent = isKk ? "Маркетологқа жіберу →" : "Отправить маркетологу →";
    }

    const moreTitle = document.getElementById('moreSectionTitle');
    if (moreTitle && !isApprover) {
      moreTitle.textContent = isKk ? "Жеке кабинет" : "Личный кабинет";
    }
    const cabHeroTitle = document.querySelector('#cabinetUnverifiedState h3');
    if (cabHeroTitle) cabHeroTitle.textContent = isKk ? "Жеке кабинет және авторизация" : "Личный кабинет и авторизация";
    const cabHeroDesc = document.querySelector('#cabinetUnverifiedState p');
    if (cabHeroDesc) cabHeroDesc.textContent = isKk
      ? "Telegram арқылы телефон нөміріңізді растаңыз: бутик басшылары жалдау шоттарына қол жеткізеді, ал СОО қызметкерлері өз жұмыс бөліміне өтеді."
      : "Подтвердите свой номер телефона через Telegram: руководители бутиков получат доступ к счетам аренды, а сотрудники ТРЦ — автоматический переход в свой рабочий раздел.";
    const verifyPhoneBtn = document.getElementById('verifyPhoneBtn');
    if (verifyPhoneBtn && !verifyPhoneBtn.disabled) {
      verifyPhoneBtn.textContent = isKk ? "📱 Телефон нөмірін растау" : "📱 Подтвердить номер телефона";
    }

    updateHeaderAndSubmissionLock();
    updateGateVisualState();
  }

  function applyMallLogoSrc(src) {
    if (!src) return;
    if (String(src).startsWith('data:image/svg+xml')) return;
    const sWrap = document.getElementById('splashLogoVectorWrap');
    const hWrap = document.getElementById('headerLogoVectorWrap');
    const imgMarkup = `<img src="${src}" alt="JANNUR" style="width:100%;height:100%;object-fit:cover;display:block;">`;
    if (sWrap) sWrap.innerHTML = imgMarkup;
    if (hWrap) hWrap.innerHTML = imgMarkup;
  }

  function hideSplashScreen() {
    const sp = document.getElementById('appSplashScreen');
    if (sp && !sp.classList.contains('fade-out')) {
      sp.classList.add('fade-out');
    }
  }
  setTimeout(hideSplashScreen, 4000);

  function getAstanaDate() {
    const now = new Date();
    return new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + 3600000 * 5);
  }

  function isEmergencyWindowActive() {
    return Date.now() < emergencyUntilMs;
  }

  function formatRemainingEmergency() {
    const remSec = Math.max(0, Math.floor((emergencyUntilMs - Date.now()) / 1000));
    const mm = String(Math.floor(remSec / 60)).padStart(2, '0');
    const ss = String(remSec % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  }

  function isSubmissionWindowOpen() {
    if (isEmergencyWindowActive()) return true;
    const astana = getAstanaDate();
    const day = astana.getDay();
    const hour = astana.getHours();
    return (day >= 1 && day <= 5) && (hour >= 9 && hour < 17);
  }

  function updateUserProfileBlock() {
    const profileBlock = document.getElementById('userProfileBlock');
    if (profileBlock) {
      // Показываем карточку профиля (имя и должность) ТОЛЬКО на последней вкладке для всех ролей!
      let shouldShowProfile = false;
      if (!isApprover) {
        shouldShowProfile = (currentViewName === 'more');
      } else if (userRole === "Маркетолог") {
        shouldShowProfile = (currentViewName === 'marketer' && activeMarketerTab === 'banners');
      } else if (userRole === "Охрана") {
        shouldShowProfile = false;
      } else {
        // Директор, Администратор, Инженер — только на последней вкладке «Ещё»
        shouldShowProfile = (currentViewName === 'more');
      }
      profileBlock.classList.toggle('hidden', !shouldShowProfile);
    }

    const tgFullName = `${currentUser.first_name || ""} ${currentUser.last_name || ""}`.trim();
    const displayName = userStaffName || tgFullName || (state.organization ? state.organization : "Гость ТРЦ");
    const initials = displayName.split(/\s+/).map(p => p[0] || "").join("").slice(0, 2).toUpperCase() || "J";

    document.getElementById('profileAvatarInitials').textContent = initials;
    document.getElementById('profileDisplayName').textContent = displayName;

    if (isApprover && userRole) {
      document.getElementById('profileRoleOrgLine').textContent = `${userRole} · ТРЦ Jannur`;
      document.getElementById('profileRightTag').textContent = userRole;
    } else if (cabinetAccounts && cabinetAccounts.length > 0) {
      document.getElementById('profileRoleOrgLine').textContent = `${cabinetAccounts[0].organization} · ${cabinetAccounts[0].floor} эт.`;
      document.getElementById('profileRightTag').textContent = "Кабинет ✓";
    } else {
      const orgHint = state.organization ? `${state.organization} · ТРЦ Jannur` : "Арендатор · ТРЦ Jannur";
      document.getElementById('profileRoleOrgLine').textContent = orgHint;
      document.getElementById('profileRightTag').textContent = currentUser.id ? `ID ${currentUser.id}` : "Арендатор";
    }
  }

  function updateHeaderAndSubmissionLock() {
    const t = I18N[currentLang] || I18N.ru;
    const open = isSubmissionWindowOpen();
    const emActive = isEmergencyWindowActive();
    const dot = document.getElementById('statusDot');
    const txt = document.getElementById('statusText');
    const astana = getAstanaDate();
    const clockEl = document.getElementById('headerAstanaClock');
    if (clockEl) {
      clockEl.textContent = `${String(astana.getHours()).padStart(2, '0')}:${String(astana.getMinutes()).padStart(2, '0')} Астана`;
    }

    if (dot) dot.classList.toggle('closed', !open);
    if (txt) {
      if (emActive) {
        txt.textContent = `⚡ Экстренный прием (${formatRemainingEmergency()})`;
      } else {
        txt.textContent = open ? t.statusOpen : t.statusClosed;
      }
    }

    const closedBlock = document.getElementById('closedHoursBlock');
    const activeBody = document.getElementById('wizardActiveBody');
    const emergencyBox = document.getElementById('adminEmergencyBox');
    const emBanner = document.getElementById('emergencyActiveBanner');
    const emCountdown = document.getElementById('emergencyCountdownText');
    const closeEmBtn = document.getElementById('closeEmergencyBtn');

    const isAdminUser = Boolean(isApprover && userRole === "Администратор");
    if (emergencyBox) emergencyBox.classList.toggle('hidden', !isAdminUser);

    const moreEmCard = document.getElementById('moreAdminEmergencyCard');
    if (moreEmCard) {
      moreEmCard.classList.toggle('hidden', !isAdminUser);
      const pill = document.getElementById('moreEmergencyStatusPill');
      const closeMoreBtn = document.getElementById('moreCloseEmergencyBtn');
      const openMoreBtn = document.getElementById('moreOpenEmergencyBtn');
      if (pill) pill.textContent = emActive ? `⚡ Активно (${formatRemainingEmergency()})` : (open ? 'Открыто по графику' : 'Закрыто');
      if (closeMoreBtn) closeMoreBtn.classList.toggle('hidden', !emActive);
      if (openMoreBtn) openMoreBtn.textContent = emActive ? `Продлить на ${emergencyMinutes} мин` : `Открыть на ${emergencyMinutes} мин`;
    }

    if (emBanner) {
      emBanner.classList.toggle('hidden', !emActive);
      if (emActive && emCountdown) {
        emCountdown.textContent = `⚡ Экстренный прием открыт (осталось ${formatRemainingEmergency()})`;
      }
      if (closeEmBtn) {
        closeEmBtn.classList.toggle('hidden', !isAdminUser);
      }
    }

    if (closedBlock && activeBody) {
      if (open) {
        closedBlock.classList.add('hidden');
        activeBody.classList.remove('hidden');
      } else {
        closedBlock.classList.remove('hidden');
        activeBody.classList.add('hidden');
      }
    }
  }

  window.addEventListener('DOMContentLoaded', async () => {
    const ruBtn = document.getElementById('langRuBtn');
    const kkBtn = document.getElementById('langKkBtn');
    if (ruBtn) ruBtn.classList.toggle('active', currentLang === 'ru');
    if (kkBtn) kkBtn.classList.toggle('active', currentLang === 'kk');

    const savedMallLogo = localStorage.getItem('jannurMallLogoDataUrl');
    if (savedMallLogo) {
      applyMallLogoSrc(savedMallLogo);
    }

    if (PAGE_MODE === 'router') {
      await runRouterEntry();
      return;
    }

    applyTranslations();
    setInterval(updateHeaderAndSubmissionLock, 20000);
    setInterval(() => { if (initDataRaw) loadUserData(false); }, 30000);

    const today = getAstanaDate().toISOString().split('T')[0];
    if (document.getElementById('startDate')) {
      document.getElementById('startDate').min = today;
      document.getElementById('startDate').value = today;
    }
    if (document.getElementById('endDate')) {
      document.getElementById('endDate').min = today;
      document.getElementById('endDate').value = today;
    }
    if (document.getElementById('promoStartDate')) {
      document.getElementById('promoStartDate').min = today;
      document.getElementById('promoStartDate').value = today;
      document.getElementById('promoEndDate').min = today;
      document.getElementById('promoEndDate').value = today;
    }

    const saved = JSON.parse(localStorage.getItem('jannurPassProfileV6') || '{}');
    if (saved.responsible && document.getElementById('responsibleInput')) {
      document.getElementById('responsibleInput').value = saved.responsible;
    }
    if (saved.car && document.getElementById('carInput')) {
      document.getElementById('carInput').value = saved.car;
    }
    if (saved.floor && document.getElementById('stepCard1')) {
      selectFloor(saved.floor, false);
      if (saved.organization) state.organization = saved.organization;
      renderTenantList();
    }

    updateUserProfileBlock();
    if (document.getElementById('tenantList')) renderTenantList();
    if (document.getElementById('timeSlotsGrid')) renderTimeSlots();
    if (document.getElementById('startDate')) applyDateRules();
    if (document.getElementById('adminLimitOrg')) populateAdminTenantSelect();
    if (document.getElementById('adminFloorTenantsList')) renderAdminTenantsManager();

    const urlParams = new URLSearchParams(window.location.search);
    const initialViewParam = urlParams.get('view');

    if (PAGE_MODE === 'tenant') {
      switchView(initialViewParam || 'wizard');
    } else if (PAGE_MODE === 'staff') {
      switchView(initialViewParam || 'approval');
    }

    const cached = readSessionCache();
    if (cached) {
      await applyServerData(cached, false, true);
    }
    await loadUserData(false);
  });

  async function runRouterEntry() {
    const urlParams = new URLSearchParams(window.location.search);
    const manualSelect = urlParams.get('select') === '1';
    const statusLabel = document.getElementById('routerStatusText');
    const cardBox = document.getElementById('routerManualCard');

    if (manualSelect) {
      if (statusLabel) statusLabel.textContent = "Выберите нужный раздел ТРЦ «Жаннур»";
      if (cardBox) cardBox.classList.remove('hidden');
      return;
    }

    // Если нет Telegram initData (открыто напрямую / без авторизации) — сразу переводим в портал арендатора
    if (!initDataRaw) {
      if (statusLabel) statusLabel.textContent = "Открываем портал арендатора...";
      navigateToPage('tenant.html');
      return;
    }

    try {
      if (statusLabel) statusLabel.textContent = "Определяем роль и права доступа...";
      const res = await fetch(`${SCRIPT_URL}?initData=${encodeURIComponent(initDataRaw)}`);
      const data = await res.json();
      saveSessionCache(data);

      if (data && data.isApprover) {
        const defaultStaffView = data.role === 'Маркетолог'
          ? 'marketer'
          : (data.role === 'Охрана' ? 'guard' : 'approval');
        navigateToPage('staff.html', { view: defaultStaffView });
      } else {
        navigateToPage('tenant.html');
      }
    } catch (e) {
      console.error("Router error:", e);
      navigateToPage('tenant.html');
    }
  }

  async function loadUserData(showToast = false) {
    if (!initDataRaw) {
      hasInitialAppLoaded = true;
      hideSplashScreen();
      if (PAGE_MODE === 'staff') {
        navigateToPage('tenant.html');
        return;
      }
      if (currentViewName !== 'wizard' && currentViewName !== 'promo' && currentViewName !== 'myRequests' && currentViewName !== 'more') {
        switchView('wizard');
      }
      initTenantAdBannerCarousel();
      return;
    }
    try {
      const res = await fetch(`${SCRIPT_URL}?initData=${encodeURIComponent(initDataRaw)}`);
      const data = await res.json();
      saveSessionCache(data);
      await applyServerData(data, showToast, false);
    } catch (e) {
      console.error(e);
    } finally {
      hideSplashScreen();
    }
  }

  async function applyServerData(data, showToast = false, fromCache = false) {
    if (!data) return;

    emergencyUntilMs = data.emergencyUntilMs ? (Number(data.emergencyUntilMs) || 0) : 0;
    updateHeaderAndSubmissionLock();

    if (data.tenantsByFloor && Object.keys(data.tenantsByFloor).length > 0) {
      TENANTS_DB = data.tenantsByFloor;
    }
    tenantRules = data.tenantRules || {};
    myRequests = data.myRequests || [];
    myPromos = data.myPromos || [];
    cabinetAccounts = data.cabinetAccounts || [];
    cabinetAll = data.cabinetAll || [];
    bannersList = data.banners || [];
    bannerIntervalSec = Number(data.bannerIntervalSec || 7);
    promoRequests = data.promoRequests || [];
    violationActsList = data.violationActs || [];

    const totalTenantBadge = myRequests.length + myPromos.length;
    setBadgeCount('myReqBadge', totalTenantBadge);
    setBadgeCount('adminMyBadge', totalTenantBadge);
    setBadgeCount('myPromosDockBadge', myPromos.length);
    if (document.getElementById('myPermitsTabCnt')) document.getElementById('myPermitsTabCnt').textContent = myRequests.length;
    if (document.getElementById('myPromosTabCnt')) document.getElementById('myPromosTabCnt').textContent = myPromos.length;

    const isBgPoll = !showToast && hasInitialAppLoaded;
    const isInMoreTab = currentViewName === 'more';

    if (document.getElementById('myRequestsList')) renderMyRequests();
    if (document.getElementById('myPromosListMain') || document.getElementById('myPromosInlineList')) renderMyPromosLists();
    if (!isInMoreTab && document.getElementById('cabinetUnverifiedState')) {
      renderTenantCabinet();
    }
    if (document.getElementById('promoVerifiedOrgBlock')) setupPromoFormOrgBlocks();
    if (!isBgPoll) {
      if (document.getElementById('tenantList')) renderTenantList();
      if (document.getElementById('timeSlotsGrid')) renderTimeSlots();
      if (document.getElementById('startDate')) applyDateRules();
      if (document.getElementById('adminLimitOrg')) populateAdminTenantSelect();
      if (document.getElementById('adminFloorTenantsList')) renderAdminTenantsManager();
    }

    if (data.isApprover) {
      isApprover = true;
      userRole = data.role;
      userStaffName = data.userName || "";

      const urlParams = new URLSearchParams(window.location.search);
      if (PAGE_MODE === 'tenant' && urlParams.get('stay') !== '1' && !fromCache) {
        const defaultStaffView = userRole === 'Маркетолог'
          ? 'marketer'
          : (userRole === 'Охрана' ? 'guard' : 'approval');
        navigateToPage('staff.html', { view: defaultStaffView });
        return;
      }

      if (document.getElementById('tenantDock')) document.getElementById('tenantDock').classList.add('hidden');
      if (document.getElementById('tenantAdBannerContainer')) document.getElementById('tenantAdBannerContainer').classList.add('hidden');

      if (userRole === "Маркетолог") {
        if (document.getElementById('adminDock')) document.getElementById('adminDock').classList.add('hidden');
        if (document.getElementById('guardDock')) document.getElementById('guardDock').classList.add('hidden');
        if (document.getElementById('marketerDock')) document.getElementById('marketerDock').classList.remove('hidden');
        if (document.getElementById('floatingFabRow')) document.getElementById('floatingFabRow').classList.add('hidden');
        if (!isBgPoll && document.getElementById('marketerBannersHost')) mountBannerManager('marketerBannersHost');
        if (document.getElementById('marketerPromosList')) renderMarketerPromos();
        if (!hasInitialAppLoaded && !showToast) switchView('marketer');
      } else if (userRole === "Охрана") {
        securityToday = data.securityToday || [];
        securityTomorrow = data.securityTomorrow || [];
        securityDates = data.securityDates || { today: "", tomorrow: "" };
        if (document.getElementById('guardTodayCount')) document.getElementById('guardTodayCount').textContent = securityToday.length;
        if (document.getElementById('guardTomorrowCount')) document.getElementById('guardTomorrowCount').textContent = securityTomorrow.length;
        setBadgeCount('guardOnlyBadge', securityToday.length);

        if (document.getElementById('adminDock')) document.getElementById('adminDock').classList.add('hidden');
        if (document.getElementById('marketerDock')) document.getElementById('marketerDock').classList.add('hidden');
        if (document.getElementById('guardDock')) document.getElementById('guardDock').classList.remove('hidden');
        if (document.getElementById('floatingFabRow')) document.getElementById('floatingFabRow').classList.add('hidden');
        if (!hasInitialAppLoaded && !showToast) switchView('guard');
        if (document.getElementById('guardConsolidatedList')) renderGuardList();
      } else {
        pendingRequests = data.requests || [];
        allRequestsRegistry = data.allRequestsRegistry || [];
        approversList = data.approvers || [];
        securityToday = data.securityToday || [];
        securityTomorrow = data.securityTomorrow || [];
        securityDates = data.securityDates || { today: "", tomorrow: "" };

        if (document.getElementById('guardTodayCount')) document.getElementById('guardTodayCount').textContent = securityToday.length;
        if (document.getElementById('guardTomorrowCount')) document.getElementById('guardTomorrowCount').textContent = securityTomorrow.length;
        setBadgeCount('guardNavBadge', securityToday.length);
        setBadgeCount('pendingBadge', pendingRequests.length);

        if (data.securityChatId && document.getElementById('securityChatIdInput') && !isInMoreTab) {
          document.getElementById('securityChatIdInput').value = data.securityChatId;
        }
        kppLogUrl = data.kppLogUrl || "";
        if (document.getElementById('kppSheetLinkBox')) updateKppSheetLinkUI();

        if (document.getElementById('guardDock')) document.getElementById('guardDock').classList.add('hidden');
        if (document.getElementById('marketerDock')) document.getElementById('marketerDock').classList.add('hidden');
        if (document.getElementById('adminDock')) document.getElementById('adminDock').classList.remove('hidden');
        if (document.getElementById('floatingFabRow')) document.getElementById('floatingFabRow').classList.toggle('hidden', currentViewName === 'more');

        if (userRole === "Директор") {
          if (document.getElementById('directorAllBtn')) document.getElementById('directorAllBtn').classList.remove('hidden');
          if (document.getElementById('approveBtnLabel')) document.getElementById('approveBtnLabel').textContent = "Утвердить";
        } else {
          if (document.getElementById('directorAllBtn')) document.getElementById('directorAllBtn').classList.add('hidden');
          if (document.getElementById('approveBtnLabel')) document.getElementById('approveBtnLabel').textContent = "Согласовать";
        }

        if (!hasInitialAppLoaded && !showToast) switchView('approval');
        if (document.getElementById('approvalCardsListContainer')) renderApprovalUI();
        if (!isInMoreTab) {
          if (document.getElementById('adminBannersHost')) mountBannerManager('adminBannersHost');
          if (document.getElementById('approversList')) renderApprovers();
          if (document.getElementById('customRulesList')) renderCustomRulesList();
          if (document.getElementById('adminLimitOrg')) syncAdminLimitForm();
          if (document.getElementById('adminCabOrg')) populateAdminCabOrgSelect();
          if (document.getElementById('adminCabinetList')) renderAdminCabinetList();
          if (document.getElementById('actAdminName')) initActViolationForm();
        }
        if (document.getElementById('actsArchiveList')) renderViolationActsArchive();
        if (document.getElementById('guardConsolidatedList')) renderGuardList();
      }
    } else {
      if (PAGE_MODE === 'staff' && !fromCache) {
        navigateToPage('tenant.html');
        return;
      }
      if (document.getElementById('tileLimits')) document.getElementById('tileLimits').classList.add('hidden');
      if (document.getElementById('tileAccess')) document.getElementById('tileAccess').classList.add('hidden');
      if (document.getElementById('tileAdminCab')) document.getElementById('tileAdminCab').classList.add('hidden');
      if (document.getElementById('tileBanners')) document.getElementById('tileBanners').classList.add('hidden');
      if (document.getElementById('tileActs')) document.getElementById('tileActs').classList.add('hidden');
      if (document.getElementById('moreMenuGrid')) document.getElementById('moreMenuGrid').classList.add('hidden');
      const moreTitle = document.getElementById('moreSectionTitle');
      if (moreTitle) moreTitle.textContent = currentLang === 'kk' ? "Жеке кабинет" : "Личный кабинет";
      if (!hasInitialAppLoaded && !showToast) {
        if (document.getElementById('moreSubCabinet')) switchMoreTab('cabinet');
      } else if (!isInMoreTab && document.getElementById('cabinetUnverifiedState')) {
        renderTenantCabinet();
      }
      initTenantAdBannerCarousel();
    }

    hasInitialAppLoaded = true;
    hideSplashScreen();
    const savedMallLogo = localStorage.getItem('jannurMallLogoDataUrl');
    if (savedMallLogo) {
      applyMallLogoSrc(savedMallLogo);
    }
    updateUserProfileBlock();
    if (showToast && !fromCache) haptic('light');
  }
  function switchView(view) {
    currentViewName = view;
    haptic('light');

    const activeDock = (isApprover && userRole !== "Охрана")
      ? document.getElementById('adminDock')
      : (userRole === "Охрана" ? document.getElementById('guardDock') : document.getElementById('tenantDock'));

    if (activeDock) {
      activeDock.querySelectorAll('.dock-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
      });
    }

    const fabRow = document.getElementById('floatingFabRow');
    if (fabRow) {
      const hideFab = (view === 'wizard') || (view === 'promo') || (view === 'more') || (userRole === "Охрана") || (userRole === "Маркетолог");
      fabRow.classList.toggle('hidden', hideFab);
    }

    ['approvalView', 'guardView', 'myRequestsView', 'wizardView', 'promoView', 'marketerView', 'moreView'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('hidden', id !== `${view}View`);
    });

    if (view === 'promo') {
      setupPromoFormOrgBlocks();
      renderMyPromosLists();
    }

    const savedMallLogo = localStorage.getItem('jannurMallLogoDataUrl');
    if (savedMallLogo) {
      applyMallLogoSrc(savedMallLogo);
    }
    updateUserProfileBlock();
    updateHeaderAndSubmissionLock();

    if (view === 'approval' && document.getElementById('approvalCardsListContainer')) renderApprovalUI();
    if (view === 'guard' && document.getElementById('guardConsolidatedList')) renderGuardList();
    if (view === 'myRequests' && document.getElementById('myRequestsList')) renderMyRequests();
    if (view === 'more') {
      if (!isApprover) {
        if (document.getElementById('moreSubCabinet')) switchMoreTab('cabinet');
      } else {
        if (document.getElementById('customRulesList')) renderCustomRulesList();
        if (document.getElementById('adminLimitOrg')) syncAdminLimitForm();
        if (document.getElementById('adminFloorTenantsList')) renderAdminTenantsManager();
        if (document.getElementById('adminCabOrg')) populateAdminCabOrgSelect();
        if (document.getElementById('adminCabinetList')) renderAdminCabinetList();
      }
    }
  }

  function setApprovalMode(mode) {
    approvalDisplayMode = mode;
    haptic('light');
    document.getElementById('modeListBtn').classList.toggle('active', mode === 'list');
    document.getElementById('modeSwipeBtn').classList.toggle('active', mode === 'swipe');
    document.getElementById('approvalCardsListContainer').classList.toggle('hidden', mode !== 'list');
    document.getElementById('approvalSwipeContainer').classList.toggle('hidden', mode !== 'swipe');
    renderApprovalUI();
  }

  function setRegistryFilter(mode, btnEl) {
    registryFilterMode = mode;
    haptic('light');
    document.querySelectorAll('#registryFilterChips .guard-chip').forEach(c => c.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    renderAdminRegistry();
  }

  function renderAdminRegistry() {
    const sec = document.getElementById('adminRegistrySection');
    const host = document.getElementById('adminRegistryListContainer');
    const cntEl = document.getElementById('registryTotalCount');
    if (!sec || !host) return;

    const showRegistry = (userRole === 'Администратор' || userRole === 'Директор');
    sec.classList.toggle('hidden', !showRegistry);
    if (!showRegistry) return;

    const q = (document.getElementById('approvalSearchInput')?.value || "").toLowerCase().trim();
    const list = (allRequestsRegistry || []).filter(r => {
      if (registryFilterMode === 'in_progress' && (r.stageCode === 'approved' || r.stageCode === 'rejected')) return false;
      if (registryFilterMode === 'engineer' && r.stageCode !== 'engineer') return false;
      if (registryFilterMode === 'director' && r.stageCode !== 'director') return false;
      if (registryFilterMode === 'approved' && r.stageCode !== 'approved') return false;
      if (registryFilterMode === 'rejected' && r.stageCode !== 'rejected') return false;
      if (!q) return true;
      const hay = `${r.rowIndex} ${r.organization} ${r.floor} ${r.workType} ${r.responsible} ${r.status} ${r.remainingApprovers || ''}`.toLowerCase();
      return hay.includes(q);
    });

    if (cntEl) cntEl.textContent = list.length;

    if (list.length === 0) {
      host.innerHTML = `<div style="text-align:center; padding:18px 12px; color:var(--ink-secondary); font-size:13px; background:var(--surface); border-radius:16px; border:1px solid var(--hairline);">По выбранному фильтру заявок нет</div>`;
      return;
    }

    host.innerHTML = list.map(r => {
      let chipClass = 'st-pending';
      if (r.stageCode === 'approved') chipClass = 'st-approved';
      else if (r.stageCode === 'rejected') chipClass = 'st-rejected';
      else if (r.stageCode === 'engineer' || r.stageCode === 'director') chipClass = 'st-step';

      const stageText = r.stageLabel || r.status || 'На согласовании';
      const remText = r.remainingApprovers || (r.stageCode === 'approved' ? 'Никто' : 'Администратор → Инженер → Директор');
      const engWarn = (r.engineerNotApproved && r.stageCode !== 'approved' && r.stageCode !== 'rejected')
        ? `<div style="margin-top:6px; padding:6px 9px; border-radius:9px; background:var(--amber-bg); color:var(--amber); font-size:11.5px; font-weight:700;">⚠️ Инженер ещё не согласовал эту заявку</div>`
        : '';

      return `
        <div class="req-card-modern" style="padding:13px 14px; margin-bottom:10px;">
          <div class="req-card-top" style="margin-bottom:6px;">
            <span class="req-num-tag">№${r.rowIndex} · ${r.floor} эт.</span>
            <span class="status-chip ${chipClass}">${r.status}</span>
          </div>
          <div class="req-org-name" style="font-size:14.5px; margin-bottom:4px;">${r.organization}</div>
          <div style="font-size:12px; color:var(--ink-secondary); margin-bottom:6px;">
            ${r.workType} · ${r.startDate === r.endDate ? r.startDate : r.startDate + ' — ' + r.endDate} · ${r.workTime}
          </div>
          <div style="padding:8px 10px; border-radius:10px; background:var(--bg); border:1px solid var(--hairline); font-size:12px; line-height:1.45;">
            <div><b>Текущий этап:</b> <span style="color:var(--ink);">${stageText}</span></div>
            <div style="margin-top:2px;"><b>Кто ещё должен согласовать:</b> <span style="color:var(--brand); font-weight:700;">${remText}</span></div>
          </div>
          ${engWarn}
        </div>
      `;
    }).join('');
  }

  function renderApprovalUI() {
    updateGateVisualState();
    setBadgeCount('pendingBadge', pendingRequests.length);
    document.getElementById('approvalHeaderCount').textContent = pendingRequests.length;

    if (approvalDisplayMode === 'list') {
      renderApprovalCardsList();
    } else {
      renderSwipeCards();
    }
    renderAdminRegistry();
  }

  function renderApprovalCardsList() {
    const container = document.getElementById('approvalCardsListContainer');
    if (!container) return;

    const allowed = isApprovalTimeAllowed();
    const q = (document.getElementById('approvalSearchInput')?.value || "").toLowerCase().trim();

    const filtered = pendingRequests.filter(r => {
      if (!q) return true;
      const hay = `${r.rowIndex} ${r.organization} ${r.floor} ${r.workType} ${r.responsible}`.toLowerCase();
      return hay.includes(q);
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state-ios">
          <div class="empty-check-orb">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div class="empty-state-title">Все заявки рассмотрены</div>
          <div class="empty-state-sub">На данный момент нет заявок, ожидающих вашего согласования.</div>
        </div>
      `;
      return;
    }

    container.innerHTML = "";
    filtered.forEach(req => {
      const card = document.createElement('div');
      card.className = 'req-card-modern';

      const stText = String(req.status || "На согласовании");
      const isStep = stText.includes("Ожидает");
      const statusBadge = isStep
        ? `<span class="status-chip st-step">✓ ${stText}</span>`
        : `<span class="status-chip st-pending">⏳ ${stText}</span>`;

      const isNotApprovedByEngineer = Boolean(req.engineerNotApproved) || stText.includes("Ожидает Инженера") || stText === "На согласовании";
      const directorEngineerBadge = (userRole === 'Директор' && isNotApprovedByEngineer)
        ? `<div style="margin:6px 0 8px; padding:7px 10px; border-radius:10px; background:var(--amber-bg); color:var(--amber); font-size:12px; font-weight:700; display:flex; align-items:center; gap:6px;">
             <span>⚠️</span>
             <span>Ещё не согласовано Инженером${stText.includes('Ожидает Инженера') ? ' (отправлено Инженеру)' : ''}</span>
           </div>`
        : '';

      const approveLabel = userRole === 'Директор' ? 'Утвердить' : 'Согласовать';
      const directorDirectBtn = (userRole === 'Директор' && isNotApprovedByEngineer)
        ? `<button type="button" class="btn-card-director" ${!allowed ? 'disabled' : ''} onclick="processListDecision(${req.rowIndex}, 'approve_all')">⚡ Утвердить напрямую без Инженера (Директор)</button>`
        : '';

      card.innerHTML = `
        <div class="req-card-top">
          <span class="req-num-tag">№${req.rowIndex} · ${req.floor} эт.</span>
          ${statusBadge}
        </div>
        ${directorEngineerBadge}
        <div class="req-org-name">${req.organization}</div>
        <div class="req-meta-grid">
          <div class="req-meta-cell">
            <span class="req-meta-lbl">Тип заявки</span>
            <span class="req-meta-val">${req.workType}</span>
          </div>
          <div class="req-meta-cell">
            <span class="req-meta-lbl">Окно времени</span>
            <span class="req-meta-val">${req.workTime}</span>
          </div>
          <div class="req-meta-cell">
            <span class="req-meta-lbl">Период</span>
            <span class="req-meta-val">${req.startDate === req.endDate ? req.startDate : req.startDate + ' — ' + req.endDate}</span>
          </div>
          <div class="req-meta-cell">
            <span class="req-meta-lbl">Авто / Люди</span>
            <span class="req-meta-val">${req.carNumber !== '-' ? req.carNumber : (req.nightDetails !== '-' ? req.nightDetails : '—')}</span>
          </div>
        </div>
        <div class="req-resp-row">
          <span>👤</span>
          <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${req.responsible}</span>
        </div>
        <div class="req-card-actions">
          <button type="button" class="btn-card-reject" ${!allowed ? 'disabled' : ''} onclick="openRejectModalByRow(${req.rowIndex})">Отклонить</button>
          <button type="button" class="btn-card-approve" ${!allowed ? 'disabled' : ''} onclick="processListDecision(${req.rowIndex}, 'approve')">${approveLabel}</button>
        </div>
        ${directorDirectBtn}
      `;
      container.appendChild(card);
    });
  }

  function applyLocalRegistryDecision(rowIndex, decision) {
    const regItem = (allRequestsRegistry || []).find(x => Number(x.rowIndex) === Number(rowIndex));
    if (!regItem) return;
    if (decision === 'reject') {
      regItem.status = `❌ Отклонено (${userRole})`;
      regItem.stageCode = 'rejected';
      regItem.stageLabel = 'Отклонено';
      regItem.remainingApprovers = 'Заявка закрыта (отклонена)';
      regItem.engineerNotApproved = false;
    } else if (userRole === 'Директор') {
      regItem.status = `✅ Согласовано (Директор)`;
      regItem.stageCode = 'approved';
      regItem.stageLabel = 'Согласовано полностью';
      regItem.remainingApprovers = 'Никто (пропуск активен)';
      regItem.engineerNotApproved = false;
    } else if (userRole === 'Инженер') {
      regItem.status = `⏳ Ожидает Директора (Согл.: Инженер)`;
      regItem.stageCode = 'director';
      regItem.stageLabel = 'Этап 3 из 3: На утверждении у Директора';
      regItem.remainingApprovers = 'Директор';
      regItem.engineerNotApproved = false;
    } else if (userRole === 'Администратор') {
      regItem.status = `⏳ Ожидает Инженера (Согл.: Администратор)`;
      regItem.stageCode = 'engineer';
      regItem.stageLabel = 'Этап 2 из 3: На согласовании у Инженера';
      regItem.remainingApprovers = 'Инженер → Директор';
      regItem.engineerNotApproved = true;
    }
  }

  async function processListDecision(rowIndex, decision, rejectReason = "") {
    const idx = pendingRequests.findIndex(x => Number(x.rowIndex) === Number(rowIndex));
    if (idx === -1) return;
    haptic('medium');
    pendingRequests.splice(idx, 1);
    applyLocalRegistryDecision(rowIndex, decision);
    renderApprovalUI();

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
          action: 'swipe',
          decision: decision,
          rowIndex: rowIndex,
          rejectReason: rejectReason,
          initData: initDataRaw
        })
      });
      await loadUserData(true);
    } catch (e) {
      console.error(e);
    }
  }

  function renderSwipeCards() {
    const arena = document.getElementById('swipeArena');
    const btns = document.getElementById('swipeButtons');
    const dirBtn = document.getElementById('directorAllBtn');

    const allowed = isApprovalTimeAllowed();
    const disabled = !allowed || pendingRequests.length === 0;
    btns.querySelectorAll('button').forEach(b => b.disabled = disabled);
    dirBtn.disabled = disabled;

    if (pendingRequests.length === 0) {
      arena.innerHTML = `
        <div class="empty-state-ios" style="margin-top:24px;">
          <div class="empty-check-orb">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div class="empty-state-title">Все заявки рассмотрены</div>
          <div class="empty-state-sub">На данный момент нет заявок, ожидающих вашего согласования.</div>
        </div>
      `;
      return;
    }

    arena.innerHTML = "";
    pendingRequests.slice(0, 2).reverse().forEach((req, idx, arr) => {
      const isTop = idx === arr.length - 1;
      const card = document.createElement('div');
      card.className = 'swipe-card';
      if (!isTop) card.style.transform = 'scale(0.96) translateY(10px)';

      const isNotApprovedByEngSwipe = Boolean(req.engineerNotApproved) || String(req.status || '').includes("Ожидает Инженера") || String(req.status || '') === "На согласовании";
      const swipeEngWarn = (userRole === 'Директор' && isNotApprovedByEngSwipe)
        ? `<div style="margin:6px 0 8px; padding:6px 10px; border-radius:10px; background:var(--amber-bg); color:var(--amber); font-size:11.5px; font-weight:700;">⚠️ Ещё не согласовано Инженером</div>`
        : '';

      card.innerHTML = `
        <div class="stamp approve">${userRole === 'Директор' ? 'УТВЕРЖДЕНО' : 'СОГЛАСОВАНО'}</div>
        <div class="stamp reject">ОТКЛОНЕНО</div>
        <div class="req-card-top">
          <span class="req-num-tag">№${req.rowIndex} · ${req.floor} эт.</span>
          <span class="status-chip st-pending">${req.status}</span>
        </div>
        ${swipeEngWarn}
        <div class="req-org-name">${req.organization}</div>
        <div style="font-size:13px; margin-bottom:5px;"><b>Вид работ:</b> ${req.workType}</div>
        <div style="font-size:13px; margin-bottom:5px;"><b>Срок:</b> с ${req.startDate} по ${req.endDate}</div>
        <div style="font-size:13px; margin-bottom:5px;"><b>Время:</b> ${req.workTime}</div>
        <div style="font-size:13px; margin-bottom:5px;"><b>Авто:</b> ${req.carNumber}</div>
        <div style="font-size:13px; margin-bottom:5px;"><b>Сотрудники:</b> ${req.nightDetails}</div>
        <div style="font-size:13px; color:var(--ink-secondary);"><b>Ответственный:</b> ${req.responsible}</div>
      `;

      if (isTop && allowed) attachSwipe(card, req);
      arena.appendChild(card);
    });
  }

  function attachSwipe(card, req) {
    let startX = 0, curX = 0, dragging = false;
    const stA = card.querySelector('.stamp.approve');
    const stR = card.querySelector('.stamp.reject');

    card.addEventListener('pointerdown', e => {
      startX = e.clientX; dragging = true;
      card.classList.add('dragging');
      card.setPointerCapture(e.pointerId);
    });
    card.addEventListener('pointermove', e => {
      if (!dragging) return;
      curX = e.clientX - startX;
      card.style.transform = `translateX(${curX}px) rotate(${curX * 0.05}deg)`;
      stA.style.opacity = curX > 30 ? Math.min((curX - 30) / 80, 1) : 0;
      stR.style.opacity = curX < -30 ? Math.min((-curX - 30) / 80, 1) : 0;
    });
    card.addEventListener('pointerup', () => {
      if (!dragging) return;
      dragging = false; card.classList.remove('dragging');
      if (curX > 100) completeSwipe(card, 'approve', req, "");
      else if (curX < -100) {
        card.style.transform = '';
        stA.style.opacity = 0; stR.style.opacity = 0;
        openRejectModal(card, req);
      } else {
        card.style.transform = '';
        stA.style.opacity = 0; stR.style.opacity = 0;
      }
      curX = 0;
    });
  }

  function openRejectModalByRow(rowIndex) {
    const req = pendingRequests.find(x => Number(x.rowIndex) === Number(rowIndex));
    if (!req) return;
    pendingRejectCard = null;
    pendingRejectReq = req;
    document.getElementById('rejectReasonInput').value = "";
    document.getElementById('rejectModal').classList.remove('hidden');
  }

  function openRejectModal(card = null, req = null) {
    const cards = document.querySelectorAll('.swipe-card');
    pendingRejectCard = card || cards[cards.length - 1];
    pendingRejectReq = req || pendingRequests[0];
    if (!pendingRejectReq) return;
    document.getElementById('rejectReasonInput').value = "";
    document.getElementById('rejectModal').classList.remove('hidden');
  }

  function closeRejectModal() {
    document.getElementById('rejectModal').classList.add('hidden');
  }

  function setRejectReason(text) {
    document.getElementById('rejectReasonInput').value = text;
  }

  function confirmReject() {
    const reason = document.getElementById('rejectReasonInput').value.trim();
    closeRejectModal();
    if (pendingRejectReq) {
      if (pendingRejectCard && approvalDisplayMode === 'swipe') {
        completeSwipe(pendingRejectCard, 'reject', pendingRejectReq, reason);
      } else {
        processListDecision(pendingRejectReq.rowIndex, 'reject', reason);
      }
    }
  }

  function triggerSwipe(decision) {
    const cards = document.querySelectorAll('.swipe-card');
    const top = cards[cards.length - 1];
    if (top && pendingRequests.length > 0) completeSwipe(top, decision, pendingRequests[0], "");
  }

  async function completeSwipe(card, decision, req, rejectReason = "") {
    haptic('medium');
    const dir = decision === 'reject' ? -1 : 1;
    card.style.transform = `translateX(${dir * 500}px) rotate(${dir * 25}deg)`;
    card.style.opacity = '0';
    pendingRequests.shift();
    applyLocalRegistryDecision(req.rowIndex, decision);
    setTimeout(renderApprovalUI, 220);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
          action: 'swipe',
          decision: decision,
          rowIndex: req.rowIndex,
          rejectReason: rejectReason,
          initData: initDataRaw
        })
      });
      await loadUserData(true);
    } catch (e) {
      console.error(e);
    }
  }

  /* ==================== МОИ ЗАЯВКИ ==================== */
  function setMyReqFilter(mode, btn) {
    myReqFilterMode = mode;
    haptic('light');
    document.querySelectorAll('#myReqFilterChips .guard-chip').forEach(c => c.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderMyRequests();
  }

  function renderMyRequests() {
    const container = document.getElementById('myRequestsList');
    if (!container) return;

    const filtered = (myRequests || []).filter(r => {
      const st = String(r.status || "");
      const isApp = st.includes("Согласовано (Директор") || st.includes("Согласовано напрямую Директором");
      const isRej = st.includes("Отклонено");
      if (myReqFilterMode === 'approved') return isApp;
      if (myReqFilterMode === 'rejected') return isRej;
      if (myReqFilterMode === 'pending') return !isApp && !isRej;
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state-ios">
          <div class="empty-check-orb" style="background:var(--surface-subtle); color:var(--ink-secondary); box-shadow:none;">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
          </div>
          <div class="empty-state-title">Заявок пока нет</div>
          <div class="empty-state-sub">Нажмите кнопку «+ Подать заявку» внизу экрана, чтобы оформить пропуск.</div>
        </div>
      `;
      return;
    }

    container.innerHTML = "";
    filtered.forEach(r => {
      const st = String(r.status || "На согласовании");
      const isFinalValid = st.includes("Согласовано (Директор") || st.includes("Согласовано напрямую Директором");
      const isRejected = st.includes("Отклонено");

      let pillClass = "st-pending";
      if (isFinalValid) pillClass = "st-approved";
      else if (isRejected) pillClass = "st-rejected";
      else if (st.includes("Ожидает")) pillClass = "st-step";

      const card = document.createElement('div');
      card.className = 'req-card-modern';
      card.innerHTML = `
        <div class="req-card-top">
          <span class="req-num-tag">№${r.rowIndex} · ${r.floor} эт.</span>
          <span class="status-chip ${pillClass}">${st}</span>
        </div>
        <div class="req-org-name">${r.organization}</div>
        <div class="req-meta-grid">
          <div class="req-meta-cell">
            <span class="req-meta-lbl">Вид работ</span>
            <span class="req-meta-val">${r.workType}</span>
          </div>
          <div class="req-meta-cell">
            <span class="req-meta-lbl">Время</span>
            <span class="req-meta-val">${r.workTime}</span>
          </div>
          <div class="req-meta-cell" style="grid-column: span 2;">
            <span class="req-meta-lbl">Срок действия</span>
            <span class="req-meta-val">с ${r.startDate} по ${r.endDate}</span>
          </div>
        </div>
        ${isFinalValid ? `<button type="button" class="qr-btn" onclick="openQrPassModal(${r.rowIndex})">🎫 Открыть QR-пропуск для охраны</button>` : ''}
        ${!isFinalValid && !isRejected ? `<div style="font-size:11.5px; color:var(--blue); font-weight:600;">ℹ️ QR-пропуск появится после утверждения Директором.</div>` : ''}
        ${r.rejectReason ? `<div class="reject-reason-box"><b>Причина:</b> ${r.rejectReason}</div>` : ''}
      `;
      container.appendChild(card);
    });
  }

  /* ==================== QR-ПРОПУСК И СКАНЕР КПП ==================== */
  function openQrPassModal(rowIndex) {
    const req = myRequests.find(x => Number(x.rowIndex) === Number(rowIndex));
    if (!req) return;
    haptic('medium');

    const qrPayload = req.qrToken || `JANNUR-${req.rowIndex}`;
    document.getElementById('qrModalOrgTitle').textContent = req.organization;
    document.getElementById('qrCodeIdLabel').textContent = `Пропуск №${req.rowIndex} • Код: ${qrPayload}`;
    document.getElementById('qrModalDetails').innerHTML = `
      <div>🏢 <b>Этаж:</b> ${req.floor}</div>
      <div>🛠 <b>Вид работ:</b> ${req.workType}</div>
      <div>📅 <b>Срок действия:</b> с ${req.startDate} по ${req.endDate}</div>
      <div>⏰ <b>Разрешенное время:</b> ${req.workTime}</div>
      <div>🚗 <b>Авто:</b> ${req.carNumber}</div>
    `;

    const canvas = document.getElementById('qrPassCanvas');
    if (window.QRious && canvas) {
      new QRious({
        element: canvas,
        value: qrPayload,
        size: 210,
        level: 'M',
        foreground: '#151518',
        background: '#FFFFFF'
      });
    }

    document.getElementById('qrPassModal').classList.remove('hidden');
  }

  function closeQrPassModal() { document.getElementById('qrPassModal').classList.add('hidden'); }
  function closeQrVerifyModal() { document.getElementById('qrVerifyModal').classList.add('hidden'); }

  function openGuardQrScanner() {
    haptic('medium');
    if (typeof tg.showScanQrPopup === 'function') {
      tg.showScanQrPopup({
        text: "Наведите камеру на QR-пропуск арендатора"
      }, function(scannedText) {
        if (scannedText) {
          if (typeof tg.closeScanQrPopup === 'function') tg.closeScanQrPopup();
          verifyScannedQrCode(scannedText);
          return true;
        }
        return false;
      });
    } else {
      const manualCode = prompt("Введите код с пропуска (например: JANNUR-12-XXXX):");
      if (manualCode) verifyScannedQrCode(manualCode.trim());
    }
  }

  function updateKppSheetLinkUI() {
    const box = document.getElementById('kppSheetLinkBox');
    if (!box) return;
    if (kppLogUrl) {
      box.innerHTML = `✅ Подключено: <a href="${kppLogUrl}" target="_blank" style="color:var(--brand); font-weight:700;">Открыть «Журнал КПП» ↗</a>`;
    } else {
      box.textContent = "Таблица создастся при первом сканировании или по кнопке ниже.";
    }
  }

  async function createSeparateKppSheet() {
    const btn = document.getElementById('createKppSheetBtn');
    btn.disabled = true;
    btn.textContent = "Создаем таблицу...";
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ action: 'create_kpp_sheet', initData: initDataRaw })
      });
      const data = await res.json();
      if (data.status === 'success') {
        kppLogUrl = data.kppLogUrl;
        updateKppSheetLinkUI();
        haptic('medium');
        tg.showAlert("✅ Таблица «Журнал КПП» создана!");
      } else {
        tg.showAlert(data.message || "Ошибка создания таблицы");
      }
    } finally {
      btn.disabled = false;
      btn.textContent = "📊 Создать / Подключить «Журнал КПП»";
    }
  }

  async function verifyScannedQrCode(qrText) {
    const modal = document.getElementById('qrVerifyModal');
    const bodyEl = document.getElementById('qrVerifyBody');
    const controlsEl = document.getElementById('kppDecisionControls');
    const rejectBlock = document.getElementById('kppRejectReasonBlock');
    const allowBtn = document.getElementById('kppAllowBtn');
    const denyBtn = document.getElementById('kppDenyBtn');

    const savedBanner = document.getElementById('kppSavedResultBanner');
    if (savedBanner) {
      savedBanner.classList.add('hidden');
      savedBanner.innerHTML = "";
    }
    controlsEl.classList.add('hidden');
    rejectBlock.classList.add('hidden');
    document.getElementById('kppRejectInput').value = "";
    allowBtn.disabled = false;
    denyBtn.disabled = false;
    denyBtn.textContent = "❌ Отклонить";

    bodyEl.innerHTML = `<div style="padding:24px; text-align:center; color:var(--ink-secondary);">⏳ Проверяем QR-код <b>${qrText}</b>...</div>`;
    modal.classList.remove('hidden');

    try {
      const res = await fetch(`${SCRIPT_URL}?action=verify_qr&qr=${encodeURIComponent(qrText)}&initData=${encodeURIComponent(initDataRaw)}`);
      const data = await res.json();
      lastScannedPass = Object.assign({ qrText: qrText }, data);
      const actualCarEl = document.getElementById('kppActualCarInput');
      if (actualCarEl) {
        actualCarEl.value = (data.carNumber && data.carNumber !== "-") ? data.carNumber : "";
      }

      if (data.valid) {
        haptic('heavy');
        const timeBadge = data.timeMatches
          ? `<div style="background:var(--green); color:#fff; padding:6px 10px; border-radius:9px; font-size:12px; font-weight:700; margin-bottom:8px;">🕒 ${data.timeNote}</div>`
          : `<div style="background:var(--amber); color:#fff; padding:6px 10px; border-radius:9px; font-size:12px; font-weight:700; margin-bottom:8px;">⚠️ ${data.timeNote}</div>`;

        bodyEl.innerHTML = `
          <div class="scan-verdict-card valid">
            <div style="font-weight:800; font-size:16px; color:var(--green); margin-bottom:6px;">✅ РАЗРЕШЕНИЕ ДЕЙСТВИТЕЛЬНО</div>
            ${timeBadge}
            <div style="font-weight:800; font-size:16px; color:var(--ink); margin-bottom:6px;">${data.organization} (${data.floor} эт.)</div>
            <div style="font-size:13px; line-height:1.45;">
              <div>🛠 <b>Работы:</b> ${data.workType}</div>
              <div>📅 <b>Срок:</b> с ${data.startDate} по ${data.endDate}</div>
              <div>⏰ <b>Окно:</b> ${data.workTime}</div>
              <div>🚗 <b>Авто:</b> ${data.carNumber}</div>
              <div>👷 <b>Люди:</b> ${data.nightDetails}</div>
              <div>📞 <b>Ответственный:</b> ${data.responsible}</div>
            </div>
          </div>
        `;
        if (!data.timeMatches) document.getElementById('kppRejectInput').value = data.timeNote;
        controlsEl.classList.remove('hidden');
      } else {
        haptic('heavy');
        bodyEl.innerHTML = `
          <div class="scan-verdict-card invalid">
            <div style="font-weight:800; font-size:16px; color:var(--brand); margin-bottom:6px;">❌ РАЗРЕШЕНИЕ НЕДЕЙСТВИТЕЛЬНО</div>
            <div style="font-size:13.5px; font-weight:600; color:var(--ink);">${data.reason || "Пропуск недействителен."}</div>
          </div>
        `;
        document.getElementById('kppRejectInput').value = data.reason || "Недействительный пропуск";
        rejectBlock.classList.remove('hidden');
        controlsEl.classList.remove('hidden');
      }
    } catch (err) {
      bodyEl.innerHTML = `<div class="scan-verdict-card invalid"><b>Ошибка связи.</b> Повторите сканирование.</div>`;
    }
  }

  function handleKppDenyClick() {
    const rejectBlock = document.getElementById('kppRejectReasonBlock');
    const denyBtn = document.getElementById('kppDenyBtn');
    if (rejectBlock.classList.contains('hidden')) {
      rejectBlock.classList.remove('hidden');
      denyBtn.textContent = "Подтвердить отказ";
      return;
    }
    submitKppDecision('deny');
  }

  async function submitKppDecision(decision) {
    if (!lastScannedPass) return;
    const allowBtn = document.getElementById('kppAllowBtn');
    const denyBtn = document.getElementById('kppDenyBtn');
    allowBtn.disabled = true;
    denyBtn.disabled = true;

    const reason = document.getElementById('kppRejectInput').value.trim();
    const actualCar = (document.getElementById('kppActualCarInput')?.value || "").trim().toUpperCase();
    const p = lastScannedPass;

    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
          action: 'log_kpp_decision',
          decision, reason,
          rowIndex: p.rowIndex || "",
          floor: p.floor || "",
          organization: p.organization || "Неизвестно",
          workType: p.workType || "",
          workTime: p.workTime || "",
          datesRange: (p.startDate && p.endDate) ? `${p.startDate} — ${p.endDate}` : "",
          carNumber: p.carNumber || "",
          actualCarNumber: actualCar,
          nightDetails: p.nightDetails || "",
          timeNote: p.timeNote || "",
          initData: initDataRaw
        })
      });
      const data = await res.json();
      if (data.status === 'success') {
        if (data.kppLogUrl) {
          kppLogUrl = data.kppLogUrl;
          updateKppSheetLinkUI();
        }
        haptic('medium');
        document.getElementById('kppDecisionControls').classList.add('hidden');
        const resBanner = document.getElementById('kppSavedResultBanner');
        resBanner.classList.remove('hidden');
        resBanner.innerHTML = `
          <div style="padding:12px; border-radius:12px; text-align:center; font-weight:700; font-size:13px; background:${decision === 'allow' ? 'var(--green-bg)' : 'var(--red-bg)'}; color:${decision === 'allow' ? 'var(--green)' : 'var(--brand)'};">
            ${decision === 'allow' ? '✅ Записано в Журнал КПП: ПРОПУЩЕН' : '❌ Записано в Журнал КПП: ОТКЛОНЕН'} (${data.loggedAt})
          </div>
        `;
      } else {
        tg.showAlert(data.message || "Ошибка записи");
        allowBtn.disabled = false;
        denyBtn.disabled = false;
      }
    } catch (e) {
      tg.showAlert("Ошибка сети");
      allowBtn.disabled = false;
      denyBtn.disabled = false;
    }
  }

  /* ==================== ПОСТ ОХРАНЫ ==================== */
  function setGuardDay(day) {
    guardDayMode = day;
    haptic('light');
    document.getElementById('guardDayTodayBtn').classList.toggle('active', day === 'today');
    document.getElementById('guardDayTomorrowBtn').classList.toggle('active', day === 'tomorrow');
    renderGuardList();
  }

  function setGuardFilter(filter, btn) {
    guardFilterMode = filter;
    haptic('light');
    document.querySelectorAll('#guardFilterChips .guard-chip').forEach(c => c.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderGuardList();
  }

  function renderGuardList() {
    const container = document.getElementById('guardConsolidatedList');
    if (!container) return;

    const dateStr = guardDayMode === 'today' ? securityDates.today : securityDates.tomorrow;
    const subEl = document.getElementById('guardDateSubtitle');
    if (subEl && dateStr) {
      subEl.textContent = `${guardDayMode === 'today' ? 'Сегодня' : 'Завтра'}, ${dateStr}`;
    }

    const sourceList = guardDayMode === 'today' ? securityToday : securityTomorrow;
    const q = (document.getElementById('guardSearchInput')?.value || "").toLowerCase().trim();

    const filtered = sourceList.filter(group => {
      if (guardFilterMode.startsWith('floor_')) {
        if (String(group.floor) !== guardFilterMode.replace('floor_', '')) return false;
      } else if (guardFilterMode !== 'all') {
        if (!group.permits.some(p => String(p.workTime).includes(guardFilterMode))) return false;
      }
      if (!q) return true;
      const hay = [
        group.organization, group.floor, group.cars.join(' '),
        group.workers.join(' '), group.responsibles.join(' '),
        group.permits.map(p => `${p.workType} ${p.workTime}`).join(' ')
      ].join(' ').toLowerCase();
      return hay.includes(q);
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state-ios">
          <div class="empty-check-orb" style="background:var(--surface-subtle); color:var(--ink-secondary); box-shadow:none;">🛡</div>
          <div class="empty-state-title">Активных пропусков нет</div>
          <div class="empty-state-sub">На выбранную дату нет заявок, утвержденных Директором.</div>
        </div>
      `;
      return;
    }

    container.innerHTML = "";
    filtered.forEach(group => {
      const card = document.createElement('div');
      card.className = 'guard-card';
      const permitsHtml = group.permits.map(p => `
        <div class="guard-permit-item">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
            <b style="color:var(--ink);">${p.workType}</b>
            <span style="font-size:11px; font-weight:700; color:var(--brand); white-space:nowrap;">${p.workTime}</span>
          </div>
          <div style="font-size:11.5px; color:var(--ink-secondary); margin-top:3px;">
            Срок: <b>с ${p.startDate} по ${p.endDate}</b> • №${p.rowIndex}
          </div>
        </div>
      `).join('');

      card.innerHTML = `
        <div class="guard-card-head">
          <span class="guard-floor-pill">Этаж: ${group.floor}</span>
          <span class="guard-count-pill">${group.permits.length > 1 ? `Заявок: ${group.permits.length}` : '1 разрешение'}</span>
        </div>
        <div class="req-org-name" style="margin-bottom:4px;">${group.organization}</div>
        ${permitsHtml}
        <div class="guard-meta-box">
          <div>🚗 <b>Авто:</b> ${group.cars.length ? group.cars.join(', ') : 'не указано'}</div>
          <div>👷 <b>Сотрудники:</b> ${group.workers.length ? group.workers.join('; ') : 'не указаны'}</div>
          <div>📞 <b>Ответственный:</b> ${group.responsibles.join('; ')}</div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  /* ==================== МАСТЕР ПОДАЧИ ЗАЯВКИ (WIZARD) ==================== */
  function selectEmergencyMinutes(mins, btn) {
    emergencyMinutes = mins;
    haptic('light');
    document.querySelectorAll('#adminEmergencyBox .preset-btn, #moreEmDurationRow .preset-btn').forEach(b => {
      b.classList.toggle('active', b.textContent.trim().startsWith(String(mins)));
    });
    if (btn) btn.classList.add('active');
    const openBtn = document.getElementById('openEmergencyBtn');
    if (openBtn) openBtn.textContent = `Открыть прием на ${mins} мин для всех`;
    const moreOpenBtn = document.getElementById('moreOpenEmergencyBtn');
    if (moreOpenBtn) moreOpenBtn.textContent = `Открыть на ${mins} мин`;
  }

  async function enableAdminEmergencyOpen() {
    const openBtn = document.getElementById('openEmergencyBtn');
    if (openBtn) { openBtn.disabled = true; openBtn.textContent = "Открываем..."; }
    haptic('medium');
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ action: 'set_emergency_window', enabled: true, minutes: emergencyMinutes, initData: initDataRaw })
      });
      const data = await res.json();
      if (data.status === 'success') {
        emergencyUntilMs = Number(data.emergencyUntilMs) || (Date.now() + emergencyMinutes * 60000);
        updateHeaderAndSubmissionLock();
        tg.showAlert(`✅ Экстренный прием открыт на ${emergencyMinutes} мин.`);
      }
    } finally {
      if (openBtn) { openBtn.disabled = false; openBtn.textContent = `Открыть прием на ${emergencyMinutes} мин для всех`; }
    }
  }

  async function disableAdminEmergencyOpen() {
    haptic('light');
    const res = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'set_emergency_window', enabled: false, initData: initDataRaw })
    });
    const data = await res.json();
    if (data.status === 'success') { emergencyUntilMs = 0; updateHeaderAndSubmissionLock(); }
  }

  function getCurrentTenantRule() {
    const org = (state.organization || "").trim();
    return tenantRules[org] || { maxDays: 7, customTime: "", exclusiveTime: false };
  }

  function goStep(n) {
    if (!isSubmissionWindowOpen()) { updateHeaderAndSubmissionLock(); return; }
    if (n > 1 && !state.floor) return tg.showAlert("Сначала выберите этаж");
    if (n > 2 && !state.organization.trim()) return tg.showAlert("Выберите или введите ваше ИП / ТОО");
    if (n > 3 && !state.workType) return tg.showAlert("Выберите вид работ");

    const t = I18N[currentLang] || I18N.ru;
    state.step = n;
    for (let i = 1; i <= 4; i++) {
      document.getElementById(`stepCard${i}`).classList.toggle('hidden', i !== n);
      const st = document.getElementById(`st${i}`);
      st.classList.toggle('active', i === n);
      st.classList.toggle('done', i < n);
    }

    document.getElementById('prevBtn').classList.toggle('hidden', n === 1);
    document.getElementById('nextBtn').textContent = n === 4 ? t.submitBtn : t.nextBtn;
    if (n === 3) { updatePrivilegeBanner(); renderTimeSlots(); applyDateRules(); }
    if (n === 4) updatePassPreview();
    haptic('light');
  }

  function prevStep() { if (state.step > 1) goStep(state.step - 1); }

  function nextStep() {
    if (!isSubmissionWindowOpen()) return tg.showAlert("Прием заявок возможен только по будням с 09:00 до 17:00.");
    if (state.step === 1) {
      if (!state.floor) return tg.showAlert("Выберите этаж");
      goStep(2);
    } else if (state.step === 2) {
      if (!state.organization.trim()) return tg.showAlert("Выберите или введите наименование ИП / ТОО");
      goStep(3);
    } else if (state.step === 3) {
      if (!state.workType) return tg.showAlert("Выберите вид работ");
      if (!state.workTime) return tg.showAlert("Выберите время проведения работ");
      goStep(4);
    } else if (state.step === 4) {
      submitRequest();
    }
  }

  function selectFloor(fl, autoAdvance = true) {
    state.floor = fl;
    document.querySelectorAll('.floor-tile').forEach(el => el.classList.toggle('selected', el.dataset.floor === fl));
    const isContractor = fl === "Подрядчик/новый арендатор";
    state.isManualOrg = isContractor;
    document.getElementById('tenantPickerBlock').classList.toggle('hidden', isContractor);
    document.getElementById('manualTenantBlock').classList.toggle('hidden', !isContractor);
    document.getElementById('backToListLink').classList.toggle('hidden', isContractor);
    if (!isContractor) { document.getElementById('tenantSearch').value = ""; renderTenantList(); }
    renderTimeSlots();
    if (autoAdvance) { haptic('medium'); setTimeout(() => goStep(2), 180); }
  }

  function renderTenantList() {
    const q = (document.getElementById('tenantSearch').value || "").toLowerCase();
    const list = TENANTS_DB[state.floor] || [];
    const container = document.getElementById('tenantList');
    if (!container) return;
    container.innerHTML = "";
    const filtered = list.filter(name => name.toLowerCase().includes(q));
    if (filtered.length === 0) {
      container.innerHTML = `<div style="padding:14px; font-size:13px; color:var(--ink-secondary); text-align:center;">Ничего не найдено. Нажмите «+ Моего ИП нет в списке» ниже.</div>`;
      return;
    }
    filtered.forEach(name => {
      const div = document.createElement('div');
      const isSelected = state.organization === name;
      const rule = tenantRules[name];
      let badgesHtml = "";
      if (rule) {
        if (rule.maxDays && rule.maxDays !== 7) badgesHtml += `<span class="vip-tag">до ${rule.maxDays} дн.</span>`;
        if (rule.customTime) badgesHtml += `<span class="vip-tag">${rule.customTime}</span>`;
      }
      div.className = 'tenant-option' + (isSelected ? ' selected' : '');
      div.innerHTML = `<div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;"><span class="tenant-name">${name}</span>${badgesHtml}</div><span class="check-circle">✓</span>`;
      div.onclick = () => { haptic('light'); state.organization = name; renderTenantList(); updateUserProfileBlock(); };
      container.appendChild(div);
    });
  }

  function toggleManualTenant(manual = true) {
    state.isManualOrg = manual;
    document.getElementById('tenantPickerBlock').classList.toggle('hidden', manual);
    document.getElementById('manualTenantBlock').classList.toggle('hidden', !manual);
    if (manual) state.organization = document.getElementById('manualOrgInput').value;
  }

  function updatePrivilegeBanner() {
    const rule = getCurrentTenantRule();
    const banner = document.getElementById('tenantPrivilegeBanner');
    const parts = [];
    if (rule.maxDays && rule.maxDays !== 7) parts.push(`срок до ${rule.maxDays} дн.`);
    if (rule.customTime) parts.push(rule.exclusiveTime ? `окно: ${rule.customTime}` : `доп. окно: ${rule.customTime}`);
    if (parts.length > 0) {
      banner.classList.remove('hidden');
      banner.innerHTML = `⭐ Для <b>${state.organization}</b> действуют индивидуальные условия: <b>${parts.join(' • ')}</b>.`;
    } else {
      banner.classList.add('hidden');
    }
  }

  function selectWork(wt) {
    haptic('light');
    state.workType = wt;
    document.querySelectorAll('.work-tile').forEach(el => el.classList.toggle('selected', el.dataset.work === wt));
    const isNight = wt.includes("Ночные");
    document.getElementById('workersInput').required = isNight;
    const reqEl = document.getElementById('workersReq');
    if (reqEl) reqEl.style.display = isNight ? "inline" : "none";
    renderTimeSlots();
    applyDateRules();
  }

  function renderTimeSlots() {
    const grid = document.getElementById('timeSlotsGrid');
    if (!grid) return;
    const rule = getCurrentTenantRule();
    const isNightOnly = state.workType.includes("Ночные");
    const isFloor2or3 = (state.floor === "2" || state.floor === "3");
    const eveningSlot = isFloor2or3 ? "После 21:00" : "После 22:00";
    const eveningDesc = isFloor2or3 ? "Вечернее окно для 2 и 3 этажа" : "Вечернее окно для 1 и 4 этажа";
    const slots = [];

    if (!isNightOnly && rule.customTime && rule.exclusiveTime) {
      slots.push({ value: rule.customTime, title: rule.customTime, sub: "Индивидуальный график" });
    } else {
      if (!isNightOnly) slots.push({ value: "9:00-11:00", title: "09:00 – 11:00", sub: "Стандартное утреннее окно" });
      slots.push({ value: eveningSlot, title: eveningSlot, sub: eveningDesc });
      if (!isNightOnly && rule.customTime) slots.push({ value: rule.customTime, title: rule.customTime, sub: "Индивидуальное разрешение" });
    }
    if (!slots.some(s => s.value === state.workTime)) state.workTime = slots[0].value;

    grid.innerHTML = "";
    slots.forEach(slot => {
      const div = document.createElement('div');
      const isSel = state.workTime === slot.value;
      div.className = 'time-slot-card' + (isSel ? ' selected' : '');
      div.innerHTML = `<div><div class="time-slot-title">${slot.title}</div><div class="time-slot-sub">${slot.sub}</div></div><div style="font-weight:800; font-size:15px;">${isSel ? '✓' : '○'}</div>`;
      div.onclick = () => { haptic('light'); state.workTime = slot.value; renderTimeSlots(); updatePassPreview(); };
      grid.appendChild(div);
    });
  }

  function applyDateRules() {
    const startEl = document.getElementById('startDate');
    const endEl = document.getElementById('endDate');
    const presetsRow = document.getElementById('durationPresetsRow');
    if (!startEl || !startEl.value) return;

    const rule = getCurrentTenantRule();
    const maxDays = Number(rule.maxDays) || 7;
    if (presetsRow) {
      const presets = [1];
      if (maxDays >= 3) presets.push(3);
      if (maxDays >= 7) presets.push(7);
      if (maxDays > 7 && !presets.includes(maxDays)) presets.push(maxDays);
      presetsRow.innerHTML = "";
      presets.forEach(d => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'preset-btn';
        btn.textContent = d === 1 ? '1 день' : `${d} дн.`;
        btn.onclick = () => setDurationPreset(d - 1, btn);
        presetsRow.appendChild(btn);
      });
    }
    const start = new Date(startEl.value);
    const maxDate = new Date(start);
    maxDate.setDate(start.getDate() + (maxDays - 1));
    const maxStr = maxDate.toISOString().split('T')[0];
    endEl.min = startEl.value;
    endEl.max = maxStr;
    if (!endEl.value || endEl.value < startEl.value || endEl.value > maxStr) endEl.value = startEl.value;
    document.getElementById('dateRuleHint').textContent = `Доступный срок: до ${maxDays} дн. (по ${maxStr})`;
  }

  function setDurationPreset(daysToAdd, btn) {
    haptic('light');
    document.querySelectorAll('#durationPresetsRow .preset-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const startEl = document.getElementById('startDate');
    const endEl = document.getElementById('endDate');
    const start = new Date(startEl.value);
    const end = new Date(start);
    end.setDate(start.getDate() + daysToAdd);
    endEl.value = end.toISOString().split('T')[0];
  }

  function updatePassPreview() {
    document.getElementById('passFloorBadge').textContent = state.floor ? `${state.floor} этаж` : "Этаж —";
    document.getElementById('passOrgText').textContent = state.organization || "Не указано";
    document.getElementById('passWorkText').textContent = state.workType || "—";
    document.getElementById('passTimeText').textContent = state.workTime || "—";
    const s = document.getElementById('startDate').value;
    const e = document.getElementById('endDate').value;
    document.getElementById('passDatesText').textContent = s === e ? s : `${s} — ${e}`;
    document.getElementById('passCarText').textContent = document.getElementById('carInput').value.trim() || "Не указан";
  }

  async function submitRequest() {
    if (!isSubmissionWindowOpen()) return tg.showAlert("Прием заявок возможен только по будням с 09:00 до 17:00.");
    const responsible = document.getElementById('responsibleInput').value.trim();
    const workers = document.getElementById('workersInput').value.trim();
    if (!responsible) return tg.showAlert("Укажите ФИО, должность и телефон ответственного");
    if (state.workType.includes("Ночные") && !workers) return tg.showAlert("Укажите ФИО всех сотрудников");

    const btn = document.getElementById('nextBtn');
    btn.disabled = true;
    btn.textContent = "Отправляем...";
    haptic('medium');

    const car = document.getElementById('carInput').value.trim();
    localStorage.setItem('jannurPassProfileV6', JSON.stringify({ floor: state.floor, organization: state.organization, responsible, car }));

    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
          floor: state.floor,
          organization: state.organization,
          startDate: document.getElementById('startDate').value,
          endDate: document.getElementById('endDate').value,
          workTime: state.workTime,
          workType: state.workType,
          carNumber: car,
          nightDetails: workers,
          responsible: responsible,
          emergencyWindowClaim: isEmergencyWindowActive(),
          initData: initDataRaw,
          tgUser: currentUser.id ? `${currentUser.first_name || ''} (@${currentUser.username || currentUser.id})` : "Web",
          tgChatId: currentUser.id || ""
        })
      });
      const result = await res.json();
      if (result.status === "closed") {
        btn.disabled = false;
        applyTranslations();
        return tg.showAlert(result.message || "Прием заявок закрыт.");
      }
      await loadUserData(false);
      btn.disabled = false;
      applyTranslations();
      tg.showAlert("✅ Заявка отправлена! Станет действительной после утверждения Директором.", () => switchView('myRequests'));
    } catch (err) {
      tg.showAlert("Ошибка сети.");
      btn.disabled = false;
      applyTranslations();
    }
  }


  /* ==================== РЕКЛАМНЫЕ БАННЕРЫ (КАРУСЕЛЬ У АРЕНДАТОРА) ==================== */
  function initTenantAdBannerCarousel() {
    const wrap = document.getElementById('tenantAdBannerContainer');
    if (!wrap) return;
    if (bannerTimerId) {
      clearInterval(bannerTimerId);
      bannerTimerId = null;
    }
    if (!bannersList || bannersList.length === 0 || isApprover) {
      wrap.classList.add('hidden');
      return;
    }
    wrap.classList.remove('hidden');
    if (activeBannerIdx >= bannersList.length) activeBannerIdx = 0;
    renderTenantBannerSlide();

    if (bannersList.length > 1) {
      const intervalMs = Math.max(5000, Math.min(10000, (Number(bannerIntervalSec) || 7) * 1000));
      bannerTimerId = setInterval(() => {
        activeBannerIdx = (activeBannerIdx + 1) % bannersList.length;
        renderTenantBannerSlide();
      }, intervalMs);
    }
  }

  function nextTenantBannerSlide() {
    if (!bannersList || bannersList.length <= 1) return;
    haptic('light');
    activeBannerIdx = (activeBannerIdx + 1) % bannersList.length;
    renderTenantBannerSlide();
  }

  function handleTenantBannerClick() {
    if (!bannersList || bannersList.length === 0) return;
    const item = bannersList[activeBannerIdx] || bannersList[0];
    const rawLink = String(item.linkUrl || "").trim();

    if (!rawLink) {
      nextTenantBannerSlide();
      return;
    }

    haptic('medium');
    if (rawLink === '#promo' || rawLink.toLowerCase() === 'promo') {
      switchView('promo');
      return;
    }

    let targetUrl = rawLink;
    if (targetUrl.startsWith('@')) {
      targetUrl = 'https://instagram.com/' + targetUrl.slice(1);
    } else if (!/^https?:\/\//i.test(targetUrl)) {
      targetUrl = 'https://' + targetUrl;
    }

    if (targetUrl.includes('t.me/') && typeof tg.openTelegramLink === 'function') {
      tg.openTelegramLink(targetUrl);
    } else if (typeof tg.openLink === 'function') {
      tg.openLink(targetUrl);
    } else {
      window.open(targetUrl, '_blank');
    }
  }

  function renderTenantBannerSlide() {
    if (!bannersList || bannersList.length === 0) return;
    const wrap = document.getElementById('tenantAdBannerContainer');
    const wideImg = document.getElementById('adBannerWideImg');
    const thumbEl = document.getElementById('adBannerThumb');
    const bodyEl = document.getElementById('adBannerBody');
    const linkBadge = document.getElementById('adBannerLinkBadge');

    const item = bannersList[activeBannerIdx] || bannersList[0];
    const looksLikeWide = item.layout === 'wide'
      || !item.title
      || String(item.title).includes('1200×200')
      || String(item.title).includes('1200x200')
      || String(item.title).toLowerCase().includes('gif');
    const isWide = looksLikeWide && Boolean(item.imageUrl);

    wrap.classList.toggle('wide-mode', isWide);
    if (linkBadge) {
      linkBadge.classList.toggle('hidden', !item.linkUrl);
    }

    if (isWide) {
      wideImg.src = item.imageUrl;
      wideImg.classList.remove('hidden');
      thumbEl.classList.add('hidden');
      bodyEl.classList.add('hidden');
    } else {
      wideImg.classList.add('hidden');
      thumbEl.classList.remove('hidden');
      bodyEl.classList.remove('hidden');
      document.getElementById('adBannerTitle').textContent = item.title || "Акция партнёра ТРЦ";
      document.getElementById('adBannerSub').textContent = `${item.subtitle || 'Акция партнёра ТРЦ'} · ${activeBannerIdx + 1}/${bannersList.length}`;
      if (item.imageUrl) {
        thumbEl.innerHTML = `<img src="${item.imageUrl}" alt="Баннер" onerror="this.parentElement.textContent='🎁'">`;
      } else {
        thumbEl.textContent = "🎁";
      }
    }

    const dotsEl = document.getElementById('adBannerDots');
    dotsEl.innerHTML = "";
    if (bannersList.length > 1) {
      bannersList.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.className = 'ad-dot' + (idx === activeBannerIdx ? ' active' : '');
        dotsEl.appendChild(dot);
      });
    }
  }

  /* ==================== ОТПРАВКА АКЦИИ МАРКЕТОЛОГУ (АРЕНДАТОР) ==================== */
  function compressImageToBase64(file, maxDim = 1080) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          let w = img.width, h = img.height;
          if (w > maxDim || h > maxDim) {
            if (w > h) { h = Math.round(h * maxDim / w); w = maxDim; }
            else { w = Math.round(w * maxDim / h); h = maxDim; }
          }
          const canvas = document.createElement('canvas');
          canvas.width = w; canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', 0.82));
        };
        img.onerror = () => resolve(e.target.result);
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  async function handlePromoFilesSelected(input) {
    const files = Array.from(input.files || []);
    if (!files.length) return;

    for (const file of files) {
      const isImg = file.type.startsWith('image/');
      const isVid = file.type.startsWith('video/');
      if (!isImg && !isVid) continue;

      const rawUrl = await new Promise(res => {
        const r = new FileReader();
        r.onload = ev => res(ev.target.result);
        r.readAsDataURL(file);
      });
      selectedPromoMedia.push({
        name: file.name,
        type: isVid ? 'video' : 'image',
        dataUrl: rawUrl
      });
    }
    input.value = "";
    renderSelectedPromoFiles();
  }

  function removePromoFile(idx) {
    selectedPromoMedia.splice(idx, 1);
    renderSelectedPromoFiles();
  }

  function renderSelectedPromoFiles() {
    const box = document.getElementById('promoSelectedFilesList');
    if (!box) return;
    box.innerHTML = "";
    selectedPromoMedia.forEach((f, idx) => {
      const chip = document.createElement('span');
      chip.className = 'media-file-chip';
      chip.innerHTML = `${f.type === 'video' ? '🎬' : '🖼'} ${f.name.slice(0, 18)} <b style="color:var(--brand); cursor:pointer; margin-left:4px;" onclick="removePromoFile(${idx})">✕</b>`;
      box.appendChild(chip);
    });
  }

  function setupPromoFormOrgBlocks() {
    const isVerified = cabinetAccounts && cabinetAccounts.length > 0;
    const badge = document.getElementById('promoAuthStatusBadge');
    const verifiedBlock = document.getElementById('promoVerifiedOrgBlock');
    const publicBlock = document.getElementById('promoPublicOrgBlock');
    if (!verifiedBlock || !publicBlock) return;

    if (isVerified && !forcePromoManualPicker) {
      if (badge) badge.textContent = "Кабинет ✓";
      verifiedBlock.classList.remove('hidden');
      publicBlock.classList.add('hidden');
    } else {
      if (badge) badge.textContent = isVerified ? "Выбор бутика" : "Все арендаторы";
      verifiedBlock.classList.add('hidden');
      publicBlock.classList.remove('hidden');
      if (state.floor && document.getElementById('promoFloorSelect')) {
        document.getElementById('promoFloorSelect').value = state.floor;
      }
      populatePromoOrgDropdown();
    }
  }

  function togglePromoManualOrgPicker(manual) {
    forcePromoManualPicker = manual;
    setupPromoFormOrgBlocks();
  }

  function populatePromoOrgDropdown() {
    const fl = document.getElementById('promoFloorSelect')?.value || "1";
    const sel = document.getElementById('promoPublicOrgSelect');
    if (!sel) return;

    const list = TENANTS_DB[fl] || [];
    sel.innerHTML = "";
    list.forEach(name => {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      sel.appendChild(opt);
    });
    const manualOpt = document.createElement('option');
    manualOpt.value = "__manual__";
    manualOpt.textContent = "+ Ввести вручную...";
    sel.appendChild(manualOpt);

    if (state.organization && list.includes(state.organization)) {
      sel.value = state.organization;
    }
    onPromoPublicOrgChange();
  }

  function onPromoPublicOrgChange() {
    const sel = document.getElementById('promoPublicOrgSelect');
    const manualWrap = document.getElementById('promoManualOrgWrap');
    if (!sel || !manualWrap) return;
    manualWrap.classList.toggle('hidden', sel.value !== "__manual__");
  }

  async function submitTenantPromoToMarketer() {
    const startDate = document.getElementById('promoStartDate').value;
    const endDate = document.getElementById('promoEndDate').value;
    const description = document.getElementById('promoDescriptionInput').value.trim();
    const contactPhone = (document.getElementById('promoContactPhoneInput')?.value || "").trim();

    const isVerified = cabinetAccounts && cabinetAccounts.length > 0 && !forcePromoManualPicker;
    let floor = "";
    let org = "";

    if (isVerified) {
      org = document.getElementById('promoOrgSelect')?.value || cabinetAccounts[0].organization;
      const found = cabinetAccounts.find(a => a.organization === org) || cabinetAccounts[0];
      floor = found.floor;
    } else {
      floor = document.getElementById('promoFloorSelect')?.value || "";
      const selVal = document.getElementById('promoPublicOrgSelect')?.value || "";
      org = selVal === "__manual__"
        ? (document.getElementById('promoManualOrgInput')?.value || "").trim()
        : selVal;
    }

    if (!floor || !org) return tg.showAlert("Выберите этаж и наименование вашего ИП / ТОО");
    if (!startDate || !endDate) return tg.showAlert("Укажите даты проведения акции");
    if (!description) return tg.showAlert("Опишите суть акции");

    const btn = document.getElementById('submitPromoBtn');
    btn.disabled = true;
    btn.textContent = "⏳ Отправляем материалы...";
    haptic('medium');

    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
          action: 'submit_tenant_promo',
          floor,
          organization: org,
          contactPhone,
          startDate,
          endDate,
          description,
          files: selectedPromoMedia,
          initData: initDataRaw
        })
      });
      const data = await res.json();
      if (data.status === 'success') {
        document.getElementById('promoDescriptionInput').value = "";
        selectedPromoMedia = [];
        renderSelectedPromoFiles();
        if (data.myPromos) {
          myPromos = data.myPromos;
          setBadgeCount('myPromosDockBadge', myPromos.length);
          setBadgeCount('myReqBadge', myRequests.length + myPromos.length);
          if (document.getElementById('myPromosTabCnt')) document.getElementById('myPromosTabCnt').textContent = myPromos.length;
          renderMyPromosLists();
        }
        haptic('heavy');
        tg.showAlert("✅ Акция отправлена маркетологу! Статус заявки будет обновляться здесь автоматически.");
      } else {
        tg.showAlert(data.message || "Ошибка отправки акции");
      }
    } catch (e) {
      tg.showAlert("Не удалось загрузить файлы (" + (e && e.message ? e.message : "проверьте размер файлов или права Google Drive") + ").");
    } finally {
      btn.disabled = false;
      btn.textContent = "Отправить маркетологу →";
    }
  }

  function switchMyRequestsSubTab(sub) {
    haptic('light');
    document.getElementById('mySubPermitsBtn').classList.toggle('active', sub === 'permits');
    document.getElementById('mySubPromosBtn').classList.toggle('active', sub === 'promos');
    document.getElementById('myPermitsSection').classList.toggle('hidden', sub !== 'permits');
    document.getElementById('myPromosSection').classList.toggle('hidden', sub !== 'promos');
    if (sub === 'promos') renderMyPromosLists();
  }

  function renderMyPromosLists() {
    const inlineCnt = document.getElementById('myPromosInlineCount');
    if (inlineCnt) inlineCnt.textContent = (myPromos || []).length;

    const targets = ['myPromosInlineList', 'myPromosListMain'];
    targets.forEach(targetId => {
      const box = document.getElementById(targetId);
      if (!box) return;

      if (!myPromos || myPromos.length === 0) {
        box.innerHTML = `
          <div class="empty-state-ios" style="padding:26px 18px;">
            <div class="empty-check-orb" style="background:var(--surface-subtle); color:var(--ink-secondary); box-shadow:none;">📣</div>
            <div class="empty-state-title">Акций пока нет</div>
            <div class="empty-state-sub">Отправленные вами акции и их актуальный статус появятся здесь.</div>
          </div>
        `;
        return;
      }

      box.innerHTML = "";
      myPromos.forEach(p => {
        let stCls = "st-pending";
        if (p.status.includes("Опубликовано")) stCls = "st-approved";
        else if (p.status.includes("Отклонено")) stCls = "st-rejected";
        else if (p.status.includes("Взято")) stCls = "st-step";

        const card = document.createElement('div');
        card.className = 'req-card-modern';
        card.innerHTML = `
          <div class="req-card-top">
            <span class="req-num-tag">Акция №${p.rowIndex} · ${p.floor} эт.</span>
            <span class="status-chip ${stCls}">${p.status}</span>
          </div>
          <div class="req-org-name">${p.organization}</div>
          <div style="font-size:12px; font-weight:600; color:var(--ink-secondary); margin-bottom:6px;">
            📅 Период: с ${p.startDate} по ${p.endDate} · Файлов: ${(p.media || []).length}
          </div>
          <div style="font-size:13px; color:var(--ink); background:var(--bg); padding:9px 11px; border-radius:11px;">
            ${p.description}
          </div>
          ${p.rejectReason ? `<div class="reject-reason-box"><b>Причина отклонения:</b> ${p.rejectReason}</div>` : ''}
        `;
        box.appendChild(card);
      });
    });
  }

  /* ==================== РАБОЧЕЕ ПРОСТРАНСТВО МАРКЕТОЛОГА И КОНСТРУКТОР БАННЕРОВ ==================== */
  function switchMarketerTab(tab) {
    activeMarketerTab = tab;
    haptic('light');
    document.querySelectorAll('#marketerDock .dock-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mtab === tab);
    });
    document.getElementById('marketerPromosTab').classList.toggle('hidden', tab !== 'promos');
    document.getElementById('marketerBannersTab').classList.toggle('hidden', tab !== 'banners');
    const savedMallLogo = localStorage.getItem('jannurMallLogoDataUrl');
    if (savedMallLogo) {
      applyMallLogoSrc(savedMallLogo);
    }
    updateUserProfileBlock();
    if (tab === 'banners') mountBannerManager('marketerBannersHost');
    if (tab === 'promos') renderMarketerPromos();
  }

  function setPromoFilter(mode, btn) {
    promoFilterMode = mode;
    haptic('light');
    document.querySelectorAll('#promoFilterChips .guard-chip').forEach(c => c.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderMarketerPromos();
  }

  function renderMarketerPromos() {
    const newCount = (promoRequests || []).filter(p => p.status === 'Новая акция').length;
    setBadgeCount('marketerPromosBadge', newCount);
    const countEl = document.getElementById('marketerPromosCount');
    if (countEl) countEl.textContent = promoRequests.length;

    const box = document.getElementById('marketerPromosList');
    if (!box) return;

    const filtered = (promoRequests || []).filter(p => {
      if (promoFilterMode === 'all') return true;
      return String(p.status).includes(promoFilterMode);
    });

    if (filtered.length === 0) {
      box.innerHTML = `
        <div class="empty-state-ios">
          <div class="empty-check-orb">📣</div>
          <div class="empty-state-title">Заявок на акции нет</div>
          <div class="empty-state-sub">В выбранной категории пока нет заявок от арендаторов.</div>
        </div>
      `;
      return;
    }

    box.innerHTML = "";
    filtered.forEach(p => {
      let stCls = "st-pending";
      if (p.status.includes("Опубликовано")) stCls = "st-approved";
      else if (p.status.includes("Отклонено")) stCls = "st-rejected";
      else if (p.status.includes("Взято")) stCls = "st-step";

      const mediaHtml = (p.media && p.media.length > 0)
        ? `<div class="media-pill-list" style="margin-bottom:10px;">
            ${p.media.map(m => `<a href="${m.url}" target="_blank" class="media-file-chip">${m.type === 'video' ? '🎬 Видео' : '🖼 Фото'}: ${m.name.slice(0, 16)} ↗</a>`).join('')}
           </div>`
        : `<div style="font-size:11.5px; color:var(--ink-muted); margin-bottom:10px;">Без вложений</div>`;

      const card = document.createElement('div');
      card.className = 'req-card-modern';
      card.innerHTML = `
        <div class="req-card-top">
          <span class="req-num-tag">Этаж ${p.floor} · №${p.rowIndex}</span>
          <span class="status-chip ${stCls}">${p.status}</span>
        </div>
        <div class="req-org-name">${p.organization}</div>
        <div style="font-size:11.5px; color:var(--ink-secondary); margin-bottom:4px;">👤 ${p.sender || 'Арендатор'}</div>
        <div style="font-size:12px; font-weight:600; color:var(--brand); margin-bottom:6px;">
          📅 Даты акции: с ${p.startDate} по ${p.endDate}
        </div>
        <div style="font-size:13px; color:var(--ink); line-height:1.42; background:var(--bg); padding:10px 12px; border-radius:12px; margin-bottom:8px;">
          ${p.description}
        </div>
        ${mediaHtml}
        ${p.rejectReason ? `<div class="reject-reason-box" style="margin-bottom:10px;"><b>Причина отклонения:</b> ${p.rejectReason}</div>` : ''}
        <div class="req-card-actions">
          <button type="button" class="btn-card-reject" onclick="openPromoRejectModal(${p.rowIndex})">❌ Отклонить</button>
          <button type="button" class="btn-card-approve" style="background:var(--ink);" onclick="updatePromoStatusByMarketer(${p.rowIndex}, 'Взято в работу')">Взять в работу</button>
        </div>
        <button type="button" class="btn-card-director" style="background:var(--green);" onclick="updatePromoStatusByMarketer(${p.rowIndex}, 'Опубликовано ✓')">
          Опубликовано ✓
        </button>
      `;
      box.appendChild(card);
    });
  }

  function openPromoRejectModal(rowIndex) {
    pendingPromoRejectRowIndex = rowIndex;
    document.getElementById('promoRejectReasonInput').value = "";
    document.getElementById('promoRejectModal').classList.remove('hidden');
    haptic('light');
  }

  function closePromoRejectModal() {
    document.getElementById('promoRejectModal').classList.add('hidden');
    pendingPromoRejectRowIndex = null;
  }

  function setPromoRejectReason(text) {
    document.getElementById('promoRejectReasonInput').value = text;
  }

  async function confirmPromoReject() {
    const reason = document.getElementById('promoRejectReasonInput').value.trim();
    if (!reason) {
      return tg.showAlert("⚠️ Обязательно укажите причину отклонения заявки!");
    }
    const rowIndex = pendingPromoRejectRowIndex;
    closePromoRejectModal();
    if (rowIndex) {
      await updatePromoStatusByMarketer(rowIndex, 'Отклонено', reason);
    }
  }

  async function updatePromoStatusByMarketer(rowIndex, status, rejectReason = "") {
    haptic('medium');
    const res = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'update_promo_status', rowIndex, status, rejectReason, initData: initDataRaw })
    });
    const data = await res.json();
    if (data.status === 'success') {
      promoRequests = data.promoRequests || [];
      violationActsList = data.violationActs || [];
      renderMarketerPromos();
      tg.showAlert(status === 'Отклонено'
        ? `❌ Заявка отклонена. Арендатору отправлено уведомление с причиной.`
        : `✅ Статус обновлен: «${status}»`);
    } else {
      tg.showAlert(data.message || "Ошибка обновления статуса");
    }
  }

  function mountBannerManager(hostId) {
    const host = document.getElementById(hostId);
    const tpl = document.getElementById('bannerManagerTemplate');
    if (!host || !tpl) return;
    host.innerHTML = "";
    host.appendChild(tpl.content.cloneNode(true));
    renderBannersManagerList(host);
  }

  function setBannerManagerLayout(btn, layout) {
    const card = btn.closest('.surface-card');
    haptic('light');
    card.querySelector('.bm-layout-wide').classList.toggle('active', layout === 'wide');
    card.querySelector('.bm-layout-card').classList.toggle('active', layout === 'card');
    card.querySelector('.bm-layout-val').value = layout;
    card.querySelector('.bm-card-text-block').classList.toggle('hidden', layout === 'wide');
  }

  function setBannerLinkPreset(btn, val) {
    const card = btn.closest('.surface-card');
    haptic('light');
    card.querySelector('.bm-link-input').value = val;
  }

  async function handleBannerFileSelect(input) {
    const file = input.files && input.files[0];
    if (!file) return;
    const rawUrl = await new Promise(res => {
      const r = new FileReader();
      r.onload = ev => res(ev.target.result);
      r.readAsDataURL(file);
    });
    pendingBannerImage = { dataUrl: rawUrl, name: file.name };
    const card = input.closest('.surface-card');
    const dropLabel = card.querySelector('.bm-drop-label');
    if (dropLabel) dropLabel.textContent = `✅ Выбрано: ${file.name}`;
    const prevWrap = card.querySelector('.bm-preview-wrap');
    const prevImg = card.querySelector('.bm-preview-img');
    if (prevWrap && prevImg) {
      prevImg.src = rawUrl;
      prevWrap.classList.remove('hidden');
    }
  }

  async function submitNewBanner(btn) {
    const card = btn.closest('.surface-card');
    const layout = card.querySelector('.bm-layout-val')?.value || 'wide';
    const rawTextTitle = card.querySelector('.bm-title-input').value.trim();
    const adminLabel = card.querySelector('.bm-admin-label-input').value.trim();
    const subtitle = card.querySelector('.bm-sub-input').value.trim();
    const linkUrl = card.querySelector('.bm-link-input').value.trim();

    const title = layout === 'wide' ? (adminLabel || rawTextTitle || "Широкий баннер 1200×200") : rawTextTitle;

    if (layout === 'wide' && !pendingBannerImage.dataUrl) {
      return tg.showAlert("Выберите файл баннера 1200×200 px или GIF-анимацию");
    }
    if (layout !== 'wide' && !title) {
      return tg.showAlert("Введите текст рекламного баннера");
    }

    btn.disabled = true;
    btn.textContent = "⏳ Загружаем баннер...";
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
          action: 'manage_banners',
          subAction: 'add',
          layout,
          title,
          subtitle,
          linkUrl,
          imageDataUrl: pendingBannerImage.dataUrl,
          imageName: pendingBannerImage.name,
          initData: initDataRaw
        })
      });
      const data = await res.json();
      if (data.status === 'success') {
        bannersList = data.banners || [];
        pendingBannerImage = { dataUrl: "", name: "" };
        card.querySelector('.bm-title-input').value = "";
        card.querySelector('.bm-admin-label-input').value = "";
        card.querySelector('.bm-sub-input').value = "";
        card.querySelector('.bm-link-input').value = "";
        card.querySelector('.bm-drop-label').textContent = "🎞 Выбрать баннер (1200×200 px, PNG / JPG / GIF)";
        const prevWrap = card.querySelector('.bm-preview-wrap');
        if (prevWrap) prevWrap.classList.add('hidden');
        renderAllBannerHosts();
        haptic('medium');
        tg.showAlert("✅ Рекламный баннер опубликован!");
      } else {
        tg.showAlert(data.message || "Ошибка загрузки баннера");
      }
    } catch (e) {
      tg.showAlert("Ошибка при загрузке баннера: " + (e && e.message ? e.message : "проверьте доступ к Google Drive"));
    } finally {
      btn.disabled = false;
      btn.textContent = "+ Опубликовать баннер";
    }
  }

  async function changeBannerInterval(sec) {
    haptic('light');
    const res = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'manage_banners', subAction: 'set_interval', intervalSec: sec, initData: initDataRaw })
    });
    const data = await res.json();
    if (data.status === 'success') {
      bannerIntervalSec = Number(data.bannerIntervalSec || sec);
      renderAllBannerHosts();
      tg.showAlert(`✅ Интервал смены баннеров: каждые ${bannerIntervalSec} сек.`);
    }
  }

  async function moveBannerOrder(rowIndex, direction) {
    haptic('light');
    const res = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'manage_banners', subAction: 'move', rowIndex, direction, initData: initDataRaw })
    });
    const data = await res.json();
    if (data.status === 'success') {
      bannersList = data.banners || [];
      renderAllBannerHosts();
    }
  }

  async function toggleBannerActive(rowIndex) {
    haptic('light');
    const res = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'manage_banners', subAction: 'toggle', rowIndex, initData: initDataRaw })
    });
    const data = await res.json();
    if (data.status === 'success') {
      bannersList = data.banners || [];
      renderAllBannerHosts();
    }
  }

  async function deleteBannerItem(rowIndex) {
    haptic('medium');
    const res = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'manage_banners', subAction: 'remove', rowIndex, initData: initDataRaw })
    });
    const data = await res.json();
    if (data.status === 'success') {
      bannersList = data.banners || [];
      renderAllBannerHosts();
    }
  }

  function renderAllBannerHosts() {
    ['marketerBannersHost', 'adminBannersHost'].forEach(id => {
      const el = document.getElementById(id);
      if (el && el.innerHTML.trim() !== "") renderBannersManagerList(el);
    });
  }

  function renderBannersManagerList(host) {
    host.querySelectorAll('.bm-interval-row .preset-btn').forEach(b => {
      b.classList.toggle('active', Number(b.dataset.sec) === Number(bannerIntervalSec));
    });

    const box = host.querySelector('.bm-list-box');
    if (!box) return;
    if (!bannersList || bannersList.length === 0) {
      box.innerHTML = `<div style="font-size:13px; color:var(--ink-secondary); padding:6px 0;">Баннеров пока нет.</div>`;
      return;
    }

    box.innerHTML = "";
    bannersList.forEach((b, idx) => {
      const row = document.createElement('div');
      row.className = 'rule-item';
      row.innerHTML = `
        <div style="flex:1; min-width:0;">
          <div style="font-weight:700; font-size:13px; color:${b.active ? 'var(--ink)' : 'var(--ink-muted)'};">
            ${idx + 1}. ${b.title}
          </div>
          <div style="font-size:11px; color:var(--ink-secondary); margin-top:2px;">
            ${b.active ? '🟢 Активен' : '⚪ Скрыт'} · ${b.layout === 'wide' ? '1200×200 / GIF' : 'Карточка'}${b.linkUrl ? ' · 🔗 Ссылка' : ''}
          </div>
        </div>
        <div style="display:flex; gap:4px; align-items:center; flex-shrink:0;">
          <button type="button" class="preset-btn" style="padding:5px 8px;" ${idx === 0 ? 'disabled' : ''} onclick="moveBannerOrder(${b.rowIndex}, 'up')">↑</button>
          <button type="button" class="preset-btn" style="padding:5px 8px;" ${idx === bannersList.length - 1 ? 'disabled' : ''} onclick="moveBannerOrder(${b.rowIndex}, 'down')">↓</button>
          <button type="button" class="preset-btn" style="padding:5px 8px;" onclick="toggleBannerActive(${b.rowIndex})">${b.active ? '👁' : '🚫'}</button>
          <button type="button" class="del-pill-btn" style="padding:5px 8px;" onclick="deleteBannerItem(${b.rowIndex})">✕</button>
        </div>
      `;
      box.appendChild(row);
    });
  }

  /* ==================== ЛИМИТЫ, ДОСТУПЫ И ЛИЧНЫЙ КАБИНЕТ ==================== */
  function populateAdminTenantSelect() {
    const fl = document.getElementById('adminLimitFloor').value;
    const sel = document.getElementById('adminLimitOrg');
    sel.innerHTML = "";
    (TENANTS_DB[fl] || []).forEach(name => {
      const opt = document.createElement('option');
      opt.value = name; opt.textContent = name;
      sel.appendChild(opt);
    });
    syncAdminLimitForm();
  }

  function syncAdminLimitForm() {
    const org = document.getElementById('adminLimitOrg').value;
    const rule = tenantRules[org] || { maxDays: 7, customTime: "", exclusiveTime: false };
    document.getElementById('adminMaxDaysInput').value = rule.maxDays || 7;
    document.getElementById('adminCustomTimeInput').value = rule.customTime || "";
    document.getElementById('adminExclusiveTimeCheck').checked = Boolean(rule.exclusiveTime);
  }

  function setAdminTimePreset(val) {
    haptic('light');
    document.getElementById('adminCustomTimeInput').value = val;
  }

  async function saveTenantRule() {
    const org = document.getElementById('adminLimitOrg').value;
    const maxDays = Math.max(1, Math.min(90, Number(document.getElementById('adminMaxDaysInput').value) || 7));
    const customTime = document.getElementById('adminCustomTimeInput').value.trim();
    const exclusiveTime = document.getElementById('adminExclusiveTimeCheck').checked;
    if (!org) return;

    const btn = document.getElementById('saveLimitBtn');
    btn.disabled = true; btn.textContent = "Сохраняем...";
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ action: 'manage_tenant_rule', organization: org, maxDays, customTime, exclusiveTime, initData: initDataRaw })
      });
      const data = await res.json();
      if (data.status === 'success') {
        tenantRules = data.tenantRules || {};
        renderCustomRulesList();
        renderTenantList();
        haptic('medium');
        tg.showAlert(`✅ Исключение для «${org}» сохранено!`);
      }
    } finally {
      btn.disabled = false; btn.textContent = "Сохранить исключение";
    }
  }

  async function resetTenantRule(orgName) {
    const res = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'manage_tenant_rule', organization: orgName, maxDays: 7, customTime: "", exclusiveTime: false, initData: initDataRaw })
    });
    const data = await res.json();
    if (data.status === 'success') { tenantRules = data.tenantRules || {}; renderCustomRulesList(); syncAdminLimitForm(); renderTenantList(); }
  }

  function renderCustomRulesList() {
    const box = document.getElementById('customRulesList');
    const entries = Object.entries(tenantRules);
    if (entries.length === 0) {
      box.innerHTML = `<div style="font-size:13px; color:var(--ink-secondary); padding:6px 0;">Индивидуальных исключений пока нет.</div>`;
      return;
    }
    box.innerHTML = "";
    entries.forEach(([orgName, r]) => {
      const tags = [];
      if (r.maxDays && r.maxDays !== 7) tags.push(`до ${r.maxDays} дн.`);
      if (r.customTime) tags.push(`${r.customTime}`);
      const div = document.createElement('div');
      div.className = 'rule-item';
      div.innerHTML = `<div><div style="font-weight:700; font-size:13.5px;">${orgName}</div><div style="font-size:11.5px; color:var(--brand); font-weight:600;">${tags.join(' • ')}</div></div><button class="del-pill-btn" onclick="resetTenantRule('${orgName.replace(/'/g, "\\'")}')">Сбросить</button>`;
      box.appendChild(div);
    });
  }

  function renderAdminTenantsManager() {
    const fl = document.getElementById('manageFloorSelect').value;
    const list = TENANTS_DB[fl] || [];
    document.getElementById('floorTenantsCountTitle').textContent = `Арендаторы (${fl} эт.): ${list.length}`;
    const container = document.getElementById('adminFloorTenantsList');
    container.innerHTML = "";
    if (list.length === 0) {
      container.innerHTML = `<div style="padding:14px 4px; font-size:13px; color:var(--ink-secondary);">На этом этаже пока нет арендаторов</div>`;
      return;
    }
    list.forEach(name => {
      const row = document.createElement('div');
      row.className = 'rule-item';
      const safeName = String(name).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
      const safeJsName = String(name).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      const safeJsFl = String(fl).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      row.innerHTML = `<div style="font-size:13.5px; font-weight:600; word-break:break-word;">${safeName}</div><button type="button" class="del-pill-btn" onclick="deleteTenantFromFloor('${safeJsFl}', '${safeJsName}')">Убрать</button>`;
      container.appendChild(row);
    });
  }

  async function addTenantToFloor() {
    const fl = document.getElementById('manageFloorSelect').value;
    const nameInput = document.getElementById('newTenantNameInput');
    const tenantName = nameInput.value.trim();
    if (!tenantName) return tg.showAlert("Введите наименование ИП / ТОО");
    const btn = document.getElementById('addTenantBtn');
    btn.disabled = true;
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ action: 'manage_tenants_list', subAction: 'add', floor: fl, tenantName, initData: initDataRaw })
      });
      const data = await res.json();
      if (data.status === 'success') {
        TENANTS_DB = data.tenantsByFloor;
        nameInput.value = "";
        renderAdminTenantsManager();
        populateAdminTenantSelect();
        renderTenantList();
        haptic('medium');
        tg.showAlert(`✅ «${tenantName}» добавлен!`);
      } else {
        tg.showAlert(data.message || "Не удалось добавить арендатора");
      }
    } catch (e) {
      tg.showAlert("Ошибка сети при добавлении арендатора");
    } finally { btn.disabled = false; }
  }

  async function deleteTenantFromFloor(fl, tenantName) {
    haptic('light');
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ action: 'manage_tenants_list', subAction: 'remove', floor: fl, tenantName, initData: initDataRaw })
      });
      const data = await res.json();
      if (data.status === 'success') {
        TENANTS_DB = data.tenantsByFloor;
        renderAdminTenantsManager();
        populateAdminTenantSelect();
        renderTenantList();
        haptic('medium');
        tg.showAlert(`🗑 «${tenantName}» убран из списка.`);
      } else {
        tg.showAlert(data.message || "Не удалось убрать арендатора");
      }
    } catch (e) {
      tg.showAlert("Ошибка сети при удалении арендатора");
    }
  }

  function renderApprovers() {
    const box = document.getElementById('approversList');
    box.innerHTML = "";
    if (!approversList || approversList.length === 0) {
      box.innerHTML = `<div style="font-size:13px; color:var(--ink-secondary);">Список пуст.</div>`;
      return;
    }
    approversList.forEach(a => {
      const isSelf = a.id && String(a.id) === String(currentUser.id);
      const statusHtml = a.isAuthorized
        ? `<span style="color:var(--green); font-weight:700;">${a.authNote || '✅ Авторизован'}</span>`
        : `<span style="color:var(--amber); font-weight:700;">${a.authNote || '⏳ Ожидает входа'}</span>`;
      const row = document.createElement('div');
      row.className = 'rule-item';
      row.innerHTML = `
        <div style="flex:1; min-width:0;">
          <div style="font-weight:700; font-size:13.5px;">${a.name || 'Сотрудник'} · ${a.role}</div>
          <div style="font-size:11.5px; color:var(--ink-secondary);">${a.phonePretty ? `📱 ${a.phonePretty}` : ''} ${a.id ? `· ID: ${a.id}` : ''}</div>
          <div style="font-size:11px; margin-top:2px;">${statusHtml}</div>
        </div>
        ${isSelf ? '<span style="font-size:11.5px; color:var(--ink-muted);">Вы</span>' : `<button class="del-pill-btn" onclick="removeApprover(${a.rowIndex}, '${a.id || ''}')">Удалить</button>`}
      `;
      box.appendChild(row);
    });
  }

  async function addApprover() {
    const targetName = document.getElementById('newAccName').value.trim();
    const targetPhone = document.getElementById('newAccPhone').value.trim();
    const targetRole = document.getElementById('newAccRole').value;
    const targetId = document.getElementById('newAccId').value.trim();
    if (!targetName) return tg.showAlert("Введите ФИО сотрудника");
    if (!targetPhone && !targetId) return tg.showAlert("Введите номер телефона сотрудника");

    const btn = document.getElementById('addAccBtn');
    btn.disabled = true; btn.textContent = "Регистрируем...";
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ action: 'manage_access', subAction: 'add', targetId, targetPhone, targetName, targetRole, initData: initDataRaw })
      });
      const data = await res.json();
      if (data.status === 'success') {
        approversList = data.approvers;
        renderApprovers();
        document.getElementById('newAccId').value = "";
        document.getElementById('newAccPhone').value = "";
        document.getElementById('newAccName').value = "";
        haptic('medium');
        tg.showAlert(`✅ Сотрудник «${targetName}» (${targetRole}) зарегистрирован!`);
      } else { tg.showAlert(data.message || "Ошибка"); }
    } finally { btn.disabled = false; btn.textContent = "+ Зарегистрировать сотрудника"; }
  }

  async function removeApprover(rowIndex, targetId) {
    const res = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'manage_access', subAction: 'remove', rowIndex, targetId, initData: initDataRaw })
    });
    const data = await res.json();
    if (data.status === 'success') { approversList = data.approvers; renderApprovers(); haptic('light'); }
  }

  async function saveSecurityChatId() {
    const chatId = document.getElementById('securityChatIdInput').value.trim();
    const btn = document.getElementById('saveSecChatBtn');
    btn.disabled = true;
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ action: 'set_security_chat', chatId, initData: initDataRaw })
      });
      const data = await res.json();
      if (data.status === 'success') { haptic('medium'); tg.showAlert("✅ Чат охраны сохранен!"); }
    } finally { btn.disabled = false; }
  }

  /* Личный кабинет и Аренда */
  function renderTenantCabinet() {
    const unverifiedEl = document.getElementById('cabinetUnverifiedState');
    const verifiedEl = document.getElementById('cabinetVerifiedState');
    if (!unverifiedEl || !verifiedEl) return;

    const tileCab = document.getElementById('tilePersonalCab');
    if (!cabinetAccounts || cabinetAccounts.length === 0) {
      unverifiedEl.classList.remove('hidden');
      verifiedEl.classList.add('hidden');
      if (tileCab && isApprover) tileCab.classList.remove('hidden');
      return;
    }

    unverifiedEl.classList.add('hidden');
    verifiedEl.classList.remove('hidden');
    if (tileCab) tileCab.classList.add('hidden');
    document.getElementById('cabVerifiedPhoneText').textContent = cabinetAccounts[0].phonePretty || "Телефон подтвержден";

    const promoOrgSel = document.getElementById('promoOrgSelect');
    if (promoOrgSel) {
      promoOrgSel.innerHTML = "";
      cabinetAccounts.forEach(acc => {
        const opt = document.createElement('option');
        opt.value = acc.organization;
        opt.textContent = `${acc.organization} (${acc.floor} эт.)`;
        promoOrgSel.appendChild(opt);
      });
    }

    const listBox = document.getElementById('cabinetAccountsList');
    listBox.innerHTML = "";
    cabinetAccounts.forEach(acc => {
      const st = String(acc.payStatus || "Ожидает оплаты");
      let pillCls = "st-pending";
      if (st.includes("Оплачено")) pillCls = "st-approved";
      else if (st.includes("Просрочено")) pillCls = "st-rejected";

      const card = document.createElement('div');
      card.className = 'rent-bill-card';
      card.innerHTML = `
        <div class="req-card-top">
          <span class="guard-floor-pill">${acc.floor} этаж</span>
          <span class="status-chip ${pillCls}">${st}</span>
        </div>
        <div class="req-org-name">${acc.organization}</div>
        <div style="font-size:12px; color:var(--ink-secondary);">Период: <b>${acc.period || "Текущий месяц"}</b></div>
        <div class="rent-amount-box">
          <div>
            <div style="font-size:10.5px; color:var(--ink-secondary); font-weight:600;">СУММА К ОПЛАТЕ</div>
            <div class="rent-amount-val">${acc.amount || "Счет не выставлен"}</div>
          </div>
          ${acc.dueDate ? `<div style="text-align:right;"><div style="font-size:10px; color:var(--ink-secondary);">СРОК</div><div style="font-size:12.5px; font-weight:700; color:var(--brand);">${acc.dueDate}</div></div>` : ''}
        </div>
        ${acc.comment ? `<div style="background:var(--bg); border-radius:11px; padding:10px 12px; font-size:12.5px; line-height:1.45;"><b>Комментарий:</b><br>${acc.comment}</div>` : ''}
      `;
      listBox.appendChild(card);
    });
  }

  function requestTenantPhoneVerification() {
    const errBox = document.getElementById('cabinetVerifyErrorBox');
    errBox.classList.add('hidden');
    haptic('medium');

    if (typeof tg.requestContact !== 'function') {
      errBox.classList.remove('hidden');
      errBox.textContent = "Обновите приложение Telegram до последней версии.";
      return;
    }

    tg.requestContact(async function(sent, eventObj) {
      if (!sent) return;
      const contactPayload = (eventObj && (eventObj.response || eventObj.contact || eventObj.phone_number))
        ? (eventObj.response || JSON.stringify(eventObj))
        : (tg.initData || initDataRaw || "");

      const btn = document.getElementById('verifyPhoneBtn');
      if (btn) { btn.disabled = true; btn.textContent = "⏳ Проверяем номер..."; }
      try {
        const res = await fetch(SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify({
            action: 'verify_tenant_phone',
            contactResponse: contactPayload,
            initData: tg.initData || initDataRaw
          })
        });
        const data = await res.json();
        if (data.status === 'staff_authorized') {
          haptic('heavy');
          sessionStorage.removeItem('jannurSessionCacheV1');
          saveSessionCache(Object.assign({}, data, { isApprover: true }));
          const targetView = data.role === 'Маркетолог' ? 'marketer' : (data.role === 'Охрана' ? 'guard' : 'approval');
          try {
            tg.showAlert(`✅ Добро пожаловать, ${data.userName || 'сотрудник'}! Роль: «${data.role}».`);
          } catch (e) {}
          setTimeout(() => navigateToPage('staff.html', { view: targetView }), 250);
          return;
        } else if (data.status === 'success') {
          cabinetAccounts = data.cabinetAccounts || [];
          renderTenantCabinet();
          const savedMallLogo = localStorage.getItem('jannurMallLogoDataUrl');
    if (savedMallLogo) {
      applyMallLogoSrc(savedMallLogo);
    }
    updateUserProfileBlock();
          haptic('heavy');
          tg.showAlert(`✅ Номер ${data.phonePretty} подтвержден!`);
        } else {
          errBox.classList.remove('hidden');
          errBox.textContent = data.message || "Номер не найден в базе.";
        }
      } catch (e) {
        errBox.classList.remove('hidden');
        errBox.textContent = "Ошибка сети.";
      } finally {
        btn.disabled = false; btn.textContent = "📱 Подтвердить номер телефона";
      }
    });
  }

  async function unlinkMyCabinetDevice() {
    haptic('light');
    const res = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'unlink_tenant_device', initData: initDataRaw })
    });
    const data = await res.json();
    if (data.status === 'success') { cabinetAccounts = []; renderTenantCabinet(); updateUserProfileBlock(); }
  }

  function populateAdminCabOrgSelect() {
    const flEl = document.getElementById('adminCabFloor');
    const sel = document.getElementById('adminCabOrg');
    if (!flEl || !sel) return;
    sel.innerHTML = "";
    (TENANTS_DB[flEl.value] || []).forEach(name => {
      const opt = document.createElement('option');
      opt.value = name; opt.textContent = name;
      sel.appendChild(opt);
    });
    syncAdminCabForm();
  }

  function setCabListFilter(mode, btn) {
    cabListFilterMode = mode;
    haptic('light');
    document.querySelectorAll('#cabFilterChips .guard-chip').forEach(c => c.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderAdminCabinetList();
  }

  function syncAdminCabForm() {
    const org = document.getElementById('adminCabOrg')?.value || "";
    const rec = cabinetAll.find(x => x.organization === org);
    document.getElementById('adminCabPhone').value = rec ? rec.phoneRaw : "";
    document.getElementById('adminCabPeriod').value = rec ? rec.period : "";
    document.getElementById('adminCabAmount').value = rec ? rec.amount : "";
    document.getElementById('adminCabDueDate').value = rec ? rec.dueDate : "";
    document.getElementById('adminCabStatus').value = rec ? (rec.payStatus || "Ожидает оплаты") : "Ожидает оплаты";
    document.getElementById('adminCabComment').value = rec ? rec.comment : "";
    document.getElementById('adminCabForceUnbind').checked = false;

    const infoEl = document.getElementById('adminCabBoundInfo');
    if (infoEl) {
      if (rec && rec.isAuthorized) {
        infoEl.innerHTML = `🟢 <b>Авторизован:</b> ${rec.authUserInfo || rec.boundIds}`;
      } else if (rec && rec.phoneRaw) {
        infoEl.textContent = "🟡 Номер задан, арендатор еще не входил в кабинет";
      } else {
        infoEl.textContent = "⚪ Номер телефона еще не указан";
      }
    }
  }

  async function syncAllTenantsToCabSheet() {
    haptic('light');
    const res = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'sync_cabinet_tenants', initData: initDataRaw })
    });
    const data = await res.json();
    if (data.status === 'success') {
      cabinetAll = data.cabinetAll || [];
      renderAdminCabinetList();
      tg.showAlert(`✅ Лист «Аренда_и_Кабинет» обновлен (+${data.addedCount}).`);
    }
  }

  async function saveAdminCabinetRecord() {
    const floor = document.getElementById('adminCabFloor').value;
    const organization = document.getElementById('adminCabOrg').value;
    const phone = document.getElementById('adminCabPhone').value.trim();
    const period = document.getElementById('adminCabPeriod').value.trim();
    const amount = document.getElementById('adminCabAmount').value.trim();
    const dueDate = document.getElementById('adminCabDueDate').value.trim();
    const payStatus = document.getElementById('adminCabStatus').value;
    const comment = document.getElementById('adminCabComment').value.trim();
    const forceUnbind = document.getElementById('adminCabForceUnbind').checked;

    const btn = document.getElementById('saveCabRecordBtn');
    btn.disabled = true; btn.textContent = "Сохраняем...";
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ action: 'save_cabinet_record', floor, organization, phone, period, amount, dueDate, payStatus, comment, forceUnbind, initData: initDataRaw })
      });
      const data = await res.json();
      if (data.status === 'success') {
        cabinetAll = data.cabinetAll || [];
        syncAdminCabForm();
        renderAdminCabinetList();
        haptic('medium');
        tg.showAlert(`✅ Данные для «${organization}» сохранены!`);
      }
    } finally { btn.disabled = false; btn.textContent = "💾 Сохранить"; }
  }

  async function sendAdminRentReminder() {
    const organization = document.getElementById('adminCabOrg').value;
    const customNote = (document.getElementById('broadcastRentNoteInput')?.value || "").trim();
    const btn = document.getElementById('sendRentNotifyBtn');
    btn.disabled = true;
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ action: 'send_rent_reminder', mode: 'single', organization, customNote, initData: initDataRaw })
      });
      const data = await res.json();
      if (data.status === 'success') {
        cabinetAll = data.cabinetAll || cabinetAll;
        renderAdminCabinetList();
        haptic('heavy');
        tg.showAlert(`✅ Уведомление отправлено (${data.sentCount} устр.)!`);
      } else { tg.showAlert(data.message || "Не удалось отправить"); }
    } finally { btn.disabled = false; }
  }

  async function broadcastAuthorizedRentReminders() {
    const btn = document.getElementById('broadcastRentBtn');
    const customNote = (document.getElementById('broadcastRentNoteInput')?.value || "").trim();
    btn.disabled = true; btn.textContent = "⏳ Отправляем...";
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ action: 'send_rent_reminder', mode: 'broadcast_authorized', customNote, initData: initDataRaw })
      });
      const data = await res.json();
      if (data.status === 'success') {
        cabinetAll = data.cabinetAll || cabinetAll;
        renderAdminCabinetList();
        haptic('heavy');
        tg.showAlert(`✅ Рассылка выполнена: ${data.sentOrgs} орг. (${data.sentCount} устр.).`);
      } else { tg.showAlert(data.message || "Нет подходящих получателей"); }
    } finally { btn.disabled = false; btn.textContent = "📢 Разослать уведомление об оплате всем авторизованным"; }
  }

  function renderAdminCabinetList() {
    const authCount = (cabinetAll || []).filter(x => x.isAuthorized).length;
    const unauthCount = (cabinetAll || []).filter(x => !x.isAuthorized).length;
    const authEl = document.getElementById('cabStatAuthorizedCount');
    const unauthEl = document.getElementById('cabStatUnauthCount');
    if (authEl) authEl.textContent = authCount;
    if (unauthEl) unauthEl.textContent = unauthCount;

    const box = document.getElementById('adminCabinetList');
    if (!box) return;
    const filtered = (cabinetAll || []).filter(item => {
      if (cabListFilterMode === 'authorized') return item.isAuthorized;
      if (cabListFilterMode === 'unauthorized') return !item.isAuthorized;
      if (cabListFilterMode === 'unpaid') return item.payStatus !== 'Оплачено';
      return true;
    });

    if (filtered.length === 0) {
      box.innerHTML = `<div style="font-size:13px; color:var(--ink-secondary); padding:6px 0;">Записей не найдено.</div>`;
      return;
    }

    box.innerHTML = "";
    filtered.forEach(item => {
      const div = document.createElement('div');
      div.className = 'rule-item';
      const authBadge = item.isAuthorized
        ? `<span style="color:var(--green); font-weight:700;">✅ Авторизован</span>`
        : `<span style="color:var(--ink-muted); font-weight:600;">⏳ Не авторизован</span>`;
      div.innerHTML = `
        <div style="flex:1; min-width:0;">
          <div style="font-weight:700; font-size:13.5px;">${item.organization} (${item.floor} эт.)</div>
          <div style="font-size:11.5px; margin-top:2px;">${authBadge} · ${item.phonePretty}</div>
          <div style="font-size:11px; color:var(--ink-secondary); margin-top:2px;">${item.amount || "без суммы"} · <b>${item.payStatus}</b></div>
        </div>
        <button type="button" class="del-pill-btn" style="background:var(--bg); color:var(--ink);" onclick="editCabinetFromList('${item.floor}', '${item.organization.replace(/'/g, "\\'")}')">Открыть</button>
      `;
      box.appendChild(div);
    });
  }

  function editCabinetFromList(fl, org) {
    document.getElementById('adminCabFloor').value = fl;
    populateAdminCabOrgSelect();
    document.getElementById('adminCabOrg').value = org;
    syncAdminCabForm();
    document.getElementById('moreSubAdminCabinet').scrollIntoView({ behavior: 'smooth' });
    haptic('light');
  }

  /* ==================== СОСТАВЛЕНИЕ АКТОВ О НАРУШЕНИЯХ И PDF ==================== */
  const ACT_PRESETS = {
    late_open: {
      short: "допустил позднее открытие торгового помещения",
      details: (t) => `При проведении обхода в ${t} зафиксировано, что торговое помещение арендатора закрыто для посетителей, коммерческая деятельность не ведется, персонал на рабочем месте отсутствует.`,
      req: "Арендатору необходимо обеспечить соблюдение установленного графика работы ТРЦ «Жаннур» и не допускать позднего открытия бутика в дальнейшем."
    },
    early_close: {
      short: "допустил досрочное (раннее) закрытие торгового помещения",
      details: (t) => `При проведении обхода в ${t} зафиксировано, что торговое помещение арендатора закрыто до окончания установленного времени работы ТРЦ «Жаннур» без предварительного согласования с администрацией.`,
      req: "Арендатору необходимо обеспечить соблюдение установленного графика работы и не допускать досрочного закрытия бутика в дальнейшем."
    },
    goods_import: {
      short: "осуществил ввоз (вывоз) товара в неположенное время / без согласования",
      details: (t) => `В ${t} зафиксирован факт перемещения (ввоза/вывоза) товарно-материальных ценностей через пешеходные галереи / места общего пользования в рабочее время ТРЦ без предварительного письменного разрешения администрации.`,
      req: "Арендатору необходимо осуществлять погрузочно-разгрузочные работы и транспортировку товара строго в установленное время через служебные коридоры и грузовой лифт по согласованию с администрацией."
    },
    repair_work: {
      short: "производил ремонтные (монтажные) работы в неположенное время / без согласования",
      details: (t) => `В ${t} зафиксировано проведение строительно-ремонтных / монтажных работ в помещении без предварительного письменного согласования с администрацией ТРЦ (либо в часы работы торгового центра с нарушением требований безопасности и тишины).`,
      req: "Арендатору необходимо немедленно прекратить несогласованные работы и проводить любые ремонтные или монтажные мероприятия исключительно после письменного согласования с администрацией в установленное время."
    },
    sanpin_grease: {
      short: "допустил нарушение санитарных норм (СанПиН) и правил эксплуатации жироуловителя / кухни",
      details: (t) => `В ${t} при проверке выявлено несоблюдение санитарно-гигиенических требований и норм СанПиН на кухне / в помещении арендатора, а также нарушение правил содержания и своевременной очистки жироуловителя (угроза попадания жировых отходов в систему канализации).`,
      req: "Арендатору необходимо в кратчайший срок привести состояние кухни и жироуловителя в соответствие с нормами СанПиН и требованиями договора аренды, исключив сброс жиров и отходов в трубопроводы."
    },
    mop_trash: {
      short: "допустил складирование мусора (товара) в местах общего пользования",
      details: (t) => `В ${t} зафиксировано размещение бытового мусора, тары или оборудования за пределами арендуемого помещения в местах общего пользования / служебном коридоре ТРЦ «Жаннур».`,
      req: "Арендатору необходимо немедленно освободить места общего пользования и осуществлять вынос отходов строго в главный мусоросборник на погрузочной площадке."
    },
    fire_safety: {
      short: "допустил нарушение требований пожарной безопасности",
      details: (t) => `В ${t} зафиксировано нарушение правил пожарной безопасности (загромождение прохода / использование несогласованных электронагревательных приборов или временных удлинителей).`,
      req: "Арендатору необходимо незамедлительно устранить выявленное нарушение требований пожарной безопасности и строго соблюдать инструкции администрации ТРЦ."
    },
    other: {
      short: "",
      details: () => "",
      req: "Арендатору необходимо устранить выявленное нарушение и строго соблюдать Правила внутреннего распорядка ТРЦ «Жаннур» в дальнейшем."
    }
  };

  function initActViolationForm() {
    const adminInp = document.getElementById('actAdminName');
    if (adminInp && !adminInp.value.trim()) {
      const tgFullName = `${currentUser.first_name || ""} ${currentUser.last_name || ""}`.trim();
      const baseName = userStaffName || tgFullName || "";
      if (baseName) {
        adminInp.value = userRole ? `${baseName} (${userRole})` : baseName;
      }
    }
    const dateInp = document.getElementById('actViolationDate');
    const timeInp = document.getElementById('actViolationTime');
    if (dateInp && !dateInp.value) {
      const astana = getAstanaDate();
      dateInp.value = astana.toISOString().split('T')[0];
    }
    if (timeInp && !timeInp.value) {
      const astana = getAstanaDate();
      timeInp.value = `${String(astana.getHours()).padStart(2, '0')}:${String(astana.getMinutes()).padStart(2, '0')}`;
    }
    populateActTenantSelect();
  }

  function populateActTenantSelect() {
    const flSel = document.getElementById('actFloorSelect');
    const orgSel = document.getElementById('actTenantSelect');
    const customInp = document.getElementById('actTenantCustom');
    if (!flSel || !orgSel) return;

    const fl = flSel.value;
    const list = TENANTS_DB[fl] || [];
    orgSel.innerHTML = `<option value="">— Выберите ИП / ТОО из списка (${fl} эт.) —</option>`;
    list.forEach(org => {
      const opt = document.createElement('option');
      opt.value = org;
      opt.textContent = org;
      orgSel.appendChild(opt);
    });
    const customOpt = document.createElement('option');
    customOpt.value = "CUSTOM";
    customOpt.textContent = "✏️ Ввести вручную...";
    orgSel.appendChild(customOpt);

    if (fl === "Подрядчик/новый арендатор") {
      orgSel.value = "CUSTOM";
      if (customInp) customInp.value = "";
    }
  }

  function handleActTenantSelect() {
    const sel = document.getElementById('actTenantSelect').value;
    const customInp = document.getElementById('actTenantCustom');
    const fl = document.getElementById('actFloorSelect').value;
    if (!customInp) return;
    if (sel && sel !== "CUSTOM") {
      const floorSuffix = (fl === "1" || fl === "2" || fl === "3" || fl === "4") ? ` (${fl} этаж)` : "";
      customInp.value = sel.includes("этаж") ? sel : `${sel}${floorSuffix}`;
    } else if (sel === "CUSTOM") {
      customInp.value = "";
      customInp.focus();
    }
  }

  function selectActReason(key, btnEl) {
    haptic('light');
    document.querySelectorAll('#actReasonList .act-chip-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    const preset = ACT_PRESETS[key];
    const timeVal = document.getElementById('actViolationTime').value || "указанное время";
    if (preset) {
      document.getElementById('actViolationShort').value = preset.short;
      document.getElementById('actViolationDetails').value = preset.details(timeVal);
      document.getElementById('actRequirementText').value = preset.req;
    }
  }

  function selectActPenalty(val, btnEl) {
    haptic('light');
    document.querySelectorAll('#actPenaltyList .act-chip-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    selectedActPenalty = val;
  }

  function handleActPhotosSelected(event) {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;
    const remain = Math.max(0, 3 - selectedActPhotos.length);
    const slice = files.slice(0, remain);
    if (files.length > remain) {
      tg.showAlert("Можно прикрепить максимум 3 фотографии к одному акту.");
    }
    slice.forEach(file => {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
          const canvas = document.createElement('canvas');
          const maxW = 1280;
          const scale = img.width > maxW ? maxW / img.width : 1;
          canvas.width = Math.round(img.width * scale);
          canvas.height = Math.round(img.height * scale);
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.80);
          selectedActPhotos.push({ name: file.name, dataUrl: dataUrl });
          renderActPhotoThumbs();
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
    event.target.value = "";
  }

  function removeActPhoto(idx) {
    haptic('light');
    selectedActPhotos.splice(idx, 1);
    renderActPhotoThumbs();
  }

  function renderActPhotoThumbs() {
    const grid = document.getElementById('actPhotoPreviewGrid');
    if (!grid) return;
    grid.innerHTML = "";
    selectedActPhotos.forEach((p, idx) => {
      const cell = document.createElement('div');
      cell.className = 'act-photo-thumb-item';
      cell.innerHTML = `
        <img src="${p.dataUrl}" alt="Фото ${idx + 1}">
        <button type="button" class="act-photo-del" onclick="removeActPhoto(${idx})">✕</button>
      `;
      grid.appendChild(cell);
    });
  }

  function formatActDateRu(isoDate) {
    if (!isoDate) return "";
    const parts = isoDate.split("-");
    if (parts.length !== 3) return isoDate;
    return `${parts[2]}.${parts[1]}.${parts[0]} г.`;
  }

  function openExternalPdfUrl(url) {
    if (!url) return;
    if (tg && typeof tg.openLink === 'function') {
      tg.openLink(url);
    } else {
      window.open(url, '_blank');
    }
  }

  async function submitViolationActPdf() {
    const adminName = document.getElementById('actAdminName').value.trim();
    const rawDate = document.getElementById('actViolationDate').value;
    const violationTime = document.getElementById('actViolationTime').value;
    const floor = document.getElementById('actFloorSelect').value;
    const tenantName = document.getElementById('actTenantCustom').value.trim();
    const violationShort = document.getElementById('actViolationShort').value.trim();
    const violationDetails = document.getElementById('actViolationDetails').value.trim();
    const requirementText = document.getElementById('actRequirementText').value.trim();

    if (!adminName || !tenantName || !violationShort || !violationDetails) {
      tg.showAlert("Заполните ФИО представителя администрации, наименование арендатора и описание нарушения.");
      return;
    }

    const astanaTodayIso = getAstanaDate().toISOString().slice(0, 10);
    const todayDateRu = formatActDateRu(astanaTodayIso);
    const violationDateRu = `${formatActDateRu(rawDate)} в ${violationTime}`;

    const btn = document.getElementById('submitActPdfBtn');
    const resultBox = document.getElementById('actPdfResultBox');
    btn.disabled = true;
    btn.textContent = "⏳ Формируем PDF-акт...";
    resultBox.classList.add('hidden');
    haptic('medium');

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "create_violation_act",
          initData: initDataRaw,
          today_date: todayDateRu,
          admin_name: adminName,
          floor: floor,
          violation_date: violationDateRu,
          tenant_name: tenantName,
          violation_short: violationShort,
          violation_details: violationDetails,
          requirement_text: requirementText,
          penalty: selectedActPenalty,
          photos: selectedActPhotos.map(p => p.dataUrl)
        })
      });
      const json = await res.json();
      if (json.status === "success") {
        haptic('heavy');
        const pdfLinkHtml = json.pdfUrl
          ? `<button type="button" class="btn-primary" style="width:100%; margin-top:10px; background:var(--green); box-shadow:none;" onclick="openExternalPdfUrl('${json.pdfUrl}')">📄 Открыть / Скачать готовый PDF-акт</button>`
          : "";
        resultBox.innerHTML = `
          <div style="font-weight:800; font-size:14.5px; color:var(--green);">✅ Акт №${json.actNumber || ""} сформирован в PDF!</div>
          <div style="font-size:12.5px; color:var(--ink); margin-top:4px; line-height:1.4;">
            Готовый PDF-файл сохранен на Google Диске и отправлен в ваш чат Telegram.
          </div>
          ${pdfLinkHtml}
        `;
        resultBox.classList.remove('hidden');

        document.getElementById('actViolationShort').value = "";
        document.getElementById('actViolationDetails').value = "";
        selectedActPhotos = [];
        renderActPhotoThumbs();
        document.querySelectorAll('#actReasonList .act-chip-btn').forEach(b => b.classList.remove('active'));

        await loadUserData(false);
      } else {
        tg.showAlert("Ошибка: " + (json.message || "Не удалось сформировать PDF-акт"));
      }
    } catch (e) {
      tg.showAlert("Ошибка сети при формировании PDF-акта.");
    } finally {
      btn.disabled = false;
      btn.textContent = "📄 Сформировать PDF-акт и отправить";
    }
  }

  function renderViolationActsArchive() {
    const listEl = document.getElementById('actsArchiveList');
    const cntEl = document.getElementById('actsArchiveCount');
    if (cntEl) cntEl.textContent = violationActsList.length;
    if (!listEl) return;

    if (!violationActsList.length) {
      listEl.innerHTML = `<div style="font-size:13px; color:var(--ink-secondary); padding:6px 0;">Составленных актов пока нет.</div>`;
      return;
    }

    listEl.innerHTML = "";
    violationActsList.forEach(act => {
      const item = document.createElement('div');
      item.className = 'rule-item';
      item.style.flexDirection = 'column';
      item.style.alignItems = 'stretch';
      const isFine = String(act.penalty || "").toLowerCase().includes("штраф");
      const badgeCls = isFine ? "st-rejected" : "st-pending";
      const pdfBtn = act.pdfUrl
        ? `<button type="button" class="qr-btn" style="margin-top:8px; padding:9px 12px;" onclick="openExternalPdfUrl('${act.pdfUrl}')">📄 Открыть PDF-акт №${act.actNumber}</button>`
        : "";
      item.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
          <span class="req-num-tag">Акт №${act.actNumber} · ${act.violationDate || act.createdAt}</span>
          <span class="status-chip ${badgeCls}">${act.penalty}</span>
        </div>
        <div style="font-weight:700; font-size:14px; color:var(--ink); margin-top:4px;">${act.tenantName}</div>
        <div style="font-size:12px; color:var(--ink-secondary); margin-top:2px;">${act.violationShort}</div>
        <div style="font-size:11px; color:var(--ink-muted); margin-top:3px;">Составил: ${act.adminName}</div>
        ${pdfBtn}
      `;
      listEl.appendChild(item);
    });
  }

  window.addEventListener('load', () => setTimeout(hideSplashScreen, 150));
  window.addEventListener('error', () => hideSplashScreen());
  window.addEventListener('unhandledrejection', () => hideSplashScreen());
