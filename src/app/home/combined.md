<!-- 🏆 The primary layout root shell for your app -->
<div class="bulletin-app-layout">

  <!-- 1. Centered Navigation & Language Header Bar Block -->
  <div class="bulletin-header-container">
    <div class="language-row">
      <button class="native-lang-btn" (click)="toggleLanguage()">
        {{ $any(currentLang) === 'zh' ? 'English' : '繁體中文' }}
      </button>
    </div>

    <div class="navigation-button-row">
      <button [class.active]="selectedSection === 'hk'" (click)="selectedSection = 'hk'">
        {{ $any(currentLang) === 'zh' ? '香港賽馬消息' : 'HK Racing News' }}
      </button>
      <button [class.active]="selectedSection === 'world'" (click)="selectedSection = 'world'">
        {{ $any(currentLang) === 'zh' ? '海外賽事' : 'World Pool' }}
      </button>
      <button [class.active]="selectedSection === 'rgts'" (click)="selectedSection = 'rgts'">
        {{ $any(currentLang) === 'zh' ? '走地通數據' : 'RGTS Data' }}
      </button>
    </div>
  </div>

  <!-- 2. Dynamic Content Cards View Panel Matrix -->
  @if (selectedSection === 'hk') {

    <div class="news-bulletin-wrapper text-container-card">

      <img src="assets/img/raceinfo-09232026-1080-720.webp" alt="Race Info 09232026" class="responsive-img" />

      <!-- 2. DYNAMIC LANGUAGE-BASED NEWS HEADLINE -->
      <div class="news-card-header">
        @if ($any(currentLang) === 'zh') {
          賽事日期: 23/09/2026(星期三) 
          9場 首場開跑時間: 18:40
        } @else {
          Race Meeting: 23/09/2026(Wed)
          9 races - Meeting Start Time: 18:40
        }
      </div>

      <!-- 新聞內文區 -->
      <!-- 3. DYNAMIC LANGUAGE-BASED ARTICLE CONTENT -->
      <div class="news-card-body">
        @if ($any(currentLang) === 'zh') {
          <p>
            「浪漫勇士」正式宣佈退役，為香港賽馬史上偉大且獨特的競賽生涯軌跡劃上完美句號。
            服役期間牠錄得 <strong>31 戰 24 勝</strong> 的恐怖賽績，更四度稱霸香港盃、四奪女皇盃，史無前例！
          </p>
          <p>
            其生涯合共斬獲高達 <strong>$288,745,697 港元獎金</strong>，一舉超越「金鎗六十」，成為世界賽馬史上獲得最多獎金的傳傳奇賽駒，締造前無古人的無敵紀錄。
          </p>
        } @else {
          <p>
            “Romantic Warrior” has officially announced his retirement, bringing a remarkable and unique racing career in Hong Kong to a perfect close.
            During his career he achieved an astonishing record of <strong>31 starts with 24 wins</strong>, including four Hong Kong Cup victories and four Queen Elizabeth II Cup triumphs — an unprecedented feat!
          </p>
          <p>
            His career earnings reached an incredible <strong>HK$288,745,697</strong>, surpassing “Golden Sixty” to become the highest-earning racehorse in world racing history, setting an unmatched and invincible record.
          </p>
        }
      </div>

      <!-- Outbound Redirect Navigation Action Link Button Wrapper -->
      <div class="news-card-actions">

        @if ($any(currentLang) === 'zh') {
          <!-- 1. TRADITIONAL CHINESE VERSION LINK & BUTTON -->
          <a href="https://idolhorse.com/zh-hant/horse-racing-news/world/romantic-warrior-retired-inside-the-greatest-career-in-hong-kong-racing/" 
            target="_blank" 
            class="read-more-link-wrapper">
            <button class="read-more-btn-native">
              閱讀完整文章
            </button>
          </a>
        } @else {
          <!-- 2. ENGLISH VERSION LINK & BUTTON -->
          <a href="https://idolhorse.com/horse-racing-news/hong-kong/romantic-warrior-retired-inside-the-greatest-career-in-hong-kong-racing/" 
            target="_blank" 
            class="read-more-link-wrapper">
            <button class="read-more-btn-native">
              Read Full Article
            </button>
          </a>
        }

      </div>
    </div>



    <div class="news-bulletin-wrapper text-container-card">

      <img src="assets/img/HK-News-09032026-1080-720.png" alt="Romantic Warrior" class="responsive-img" />

      <!-- 2. DYNAMIC LANGUAGE-BASED NEWS HEADLINE -->
      <div class="news-card-header">
        @if ($any(currentLang) === 'zh') {
          浪漫勇士光榮退役 — 締造香港賽馬史上最偉大傳奇
        } @else {
          Romantic Warrior Retires in Glory — Creating the Greatest Legend in Hong Kong Racing History
        }
      </div>

      <!-- 新聞內文區 -->
      <!-- 3. DYNAMIC LANGUAGE-BASED ARTICLE CONTENT -->
      <div class="news-card-body">
        @if ($any(currentLang) === 'zh') {
          <p>
            「浪漫勇士」正式宣佈退役，為香港賽馬史上偉大且獨特的競賽生涯軌跡劃上完美句號。
            服役期間牠錄得 <strong>31 戰 24 勝</strong> 的恐怖賽績，更四度稱霸香港盃、四奪女皇盃，史無前例！
          </p>
          <p>
            其生涯合共斬獲高達 <strong>$288,745,697 港元獎金</strong>，一舉超越「金鎗六十」，成為世界賽馬史上獲得最多獎金的傳傳奇賽駒，締造前無古人的無敵紀錄。
          </p>
        } @else {
          <p>
            “Romantic Warrior” has officially announced his retirement, bringing a remarkable and unique racing career in Hong Kong to a perfect close.
            During his career he achieved an astonishing record of <strong>31 starts with 24 wins</strong>, including four Hong Kong Cup victories and four Queen Elizabeth II Cup triumphs — an unprecedented feat!
          </p>
          <p>
            His career earnings reached an incredible <strong>HK$288,745,697</strong>, surpassing “Golden Sixty” to become the highest-earning racehorse in world racing history, setting an unmatched and invincible record.
          </p>
        }
      </div>

      <!-- Outbound Redirect Navigation Action Link Button Wrapper -->
      <div class="news-card-actions">

        @if ($any(currentLang) === 'zh') {
          <!-- 1. TRADITIONAL CHINESE VERSION LINK & BUTTON -->
          <a href="https://idolhorse.com/zh-hant/horse-racing-news/world/romantic-warrior-retired-inside-the-greatest-career-in-hong-kong-racing/" 
            target="_blank" 
            class="read-more-link-wrapper">
            <button class="read-more-btn-native">
              閱讀完整文章
            </button>
          </a>
        } @else {
          <!-- 2. ENGLISH VERSION LINK & BUTTON -->
          <a href="https://idolhorse.com/horse-racing-news/hong-kong/romantic-warrior-retired-inside-the-greatest-career-in-hong-kong-racing/" 
            target="_blank" 
            class="read-more-link-wrapper">
            <button class="read-more-btn-native">
              Read Full Article
            </button>
          </a>
        }

      </div>

    </div>

  }
  <!-- END: @if (selectedSection === 'hk') -->

  @if (selectedSection === 'world') {

    <div class="news-bulletin-wrapper text-container-card">

      <img src="assets/img/WorldPool-News-09032026-1080-720.png" alt="Beauty Waves" class="responsive-img" />

      <!-- 2. DYNAMIC LANGUAGE-BASED NEWS HEADLINE -->
      <div class="news-card-header">
        @if ($any(currentLang) === 'zh') {
          告東尼相信「美麗第一」準備就緒爭奪韓國短途錦標
        } @else {
          Beauty Waves well equipped for Sunday’s Korea Sprint, believes Tony Cruz
        }
      </div>

      <!-- 新聞內文區 -->
      <!-- 3. DYNAMIC LANGUAGE-BASED ARTICLE CONTENT -->
      <div class="news-card-body">
        @if ($any(currentLang) === 'zh') {
          <p>
            「美麗第一」將於週日（9月6日）在韓國首爾角逐三級賽<strong>韓國短途錦標（1200米，沙地）</strong>，力爭成為繼「積多福」（2016年）及「自強不息」（2025年）後第三匹揚威此賽的香港賽駒。這匹栗色佳駟早前已抵達當地備戰，而練馬師告東尼表示滿意馬兒的備戰工夫。            
          </p>

          <p>
            「美麗第一」於上週二（8月25日）啟程前往韓國首爾，同行的還有文家良馬房的「自強不息」及沈集成旗下的「華麗再勝」，三駒將一同角逐韓國短途錦標。告東尼過往曾派馬揚威日本及杜拜的大賽，他認為曾攻下三級賽的「美麗第一」十分適合遠征。            
          </p>

          <p>
            告東尼說：「我十分滿意馬兒在旅程中的表現。牠目前態況良好，而馬兒的脾性也很溫馴。牠不會對任何事物顯得過分雀躍，總是鎮定自若。馬兒的體重應該有所減輕，但現在已完全回復過來。從馬兒的試閘表現可見，牠已達理想狀態。」            
          </p>

          <p>
          「美麗第一」在韓國短途錦標中抽得第十三檔，而「自強不息」及「華麗再勝」則將分別自第九檔及第十六檔起步。
          </p>

          <p>
          「美麗第一」於出發當天的早上在港參加一課1050米泥地試閘，在周俊樂胯下以1分03.21秒率先衝線（分段時間為17.1秒、23.0秒及23.1秒）。周俊樂去年策騎「自強不息」揚威韓國短途錦標，今年將夥拍六歲的「美麗第一」力求再奪殊榮。            
          </p>

          <p>
          雖然「美麗第一」迄今只曾在港跑過一場泥地賽（季軍），不過牠在泥地上出操的經驗非常豐富。馬兒自2023年初從愛爾蘭來港服役以來，已先後十五次在沙田及從化的泥地試閘中以首名衝線。            
          </p>


        } @else {
          <p>
            Tony Cruz has declared his satisfaction with Beauty Waves as the chestnut gets ready for Sunday’s (6 September) <strong>G3 Korea Sprint (1200m, sand)</strong>, aiming to become Hong Kong racing’s third winner of the dash after Super Jockey (2016) and Self Improvement (2025).
          </p>

          <p>
            Having travelled to Seoul, South Korea last Tuesday (25 August) along with Manfred Man’s Self Improvement and Danny Shum’s Gorgeous Win – fellow Korea Sprint competitors – Group 3 winner Beauty Waves is the ideal horse to take overseas, according to Cruz, who has previously saddled big-race winners in Japan and Dubai.            
          </p>

          <p>
            “I’m very happy with his travelling. He’s very good. He’s got a great temperament. Nothing excites him, he’s such a calm horse,” Cruz said. “He should be losing weight but he’s putting it all back on. His trial showed me that he is in form already.”            
          </p>

          <p>
            Beauty Waves will jump from gate 13 in Sunday’s race, while Self Improvement and Gorgeous Win drew gates nine and 16, respectively.
            Beauty Waves trialled on the morning of his departure on the dirt, finishing first over 1050m in 1m 03.21s (17.1, 23, 23.1) under Jerry Chau, who partners the six-year-old in South Korea and seeks back-to-back wins following his success aboard Self Improvement.
          </p>

          <p>
            Beauty Waves has made only one start on the dirt in Hong Kong (when third), but his experience on the dirt in training is significant, finishing first in 15 previous barrier trials on the dirt at Sha Tin and Conghua since he arrived from Ireland in early 2023.
          </p>

        }
      </div>

      <!-- Outbound Redirect Navigation Action Link Button Wrapper -->
      <div class="news-card-actions">

        @if ($any(currentLang) === 'zh') {
          <!-- 1. TRADITIONAL CHINESE VERSION LINK & BUTTON -->
          <a href="https://racingnews.hkjc.com/chinese/2026/09/02/%e5%91%8a%e6%9d%b1%e5%b0%bc%e7%9b%b8%e4%bf%a1%e7%be%8e%e9%ba%97%e7%ac%ac%e4%b8%80%e6%ba%96%e5%82%99%e5%b0%b1%e7%b7%92%e7%88%ad%e5%a5%aa%e9%9f%93%e5%9c%8b%e7%9f%ad%e9%80%94%e9%8c%a6%e6%a8%99/" 
            target="_blank" 
            class="read-more-link-wrapper">
            <button class="read-more-btn-native">
              閱讀完整文章
            </button>
          </a>
        } @else {
          <!-- 2. ENGLISH VERSION LINK & BUTTON -->
          <a href="https://racingnews.hkjc.com/english/2026/09/02/beauty-waves-well-equipped-for-sundays-korea-sprint-believes-tony-cruz/" 
            target="_blank" 
            class="read-more-link-wrapper">
            <button class="read-more-btn-native">
              Read Full Article
            </button>
          </a>
        }

      </div>

    </div>
  }

  @if (selectedSection === 'rgts') {
    <!-- =========================================================================
        SECTION 3: RGTS DATA VIEW SEGMENT (100% PRERENDER & MOBILE COMPLIANT)
        ========================================================================= -->
    <div class="rgts-data-container">

      <!-- ==================== SUB-SECTION 1 ==================== -->
      <!-- 
        <div class="data-block-header">
          @if ($any(currentLang) === 'zh') {
            過去三季高水馬入三甲數據
          } @else {
            Past 3 Seasons Streamer Index Summary (Top 3 Finishers)
          }
        </div>
      -->

      <!-- 📑 RESERVED EXPLANATION TEXT FIELD FOR SUB-SECTION 1 -->
      <!-- 
        <div class="data-explanation-box">
          <p>
            @if ($any(currentLang) === 'zh') {
              <strong>數據分析提示：</strong> 過去三個馬季中，高水馬進入前三名（三甲）的統計曲線顯示出極高的流速穩定度。建議著重參考每月平均中位數（如12.51）作為新馬季開鑼初期的分水嶺。
            } @else {
              <strong>Data Analysis Tip:</strong> The distribution curve of high Streamer Index horses finishing in the Top 3 over the past 3 seasons demonstrates strong consistency. Use the historical monthly median line as a threshold for early-season profiling.
            }
          </p>
        </div>
      -->

      <!-- 📑 RESERVED EXPLANATION TEXT FIELD FOR SUB-SECTION 2 -->
      <!-- 
        <div class="data-explanation-box">
          <p>
            @if ($any(currentLang) === 'zh') {
              <strong>NSI 核心備忘：</strong> 旺勢指數（Number Strength Index）整合了近三季各檔位與人馬組合的即時流速流向，適合在開賽前進行交叉核對。
            } @else {
              <strong>NSI Core Notes:</strong> The Number Strength Index (NSI) integrates cross-factor metrics over 3 seasons. It acts as an elite filter for tracking market sentiment transitions right before the gates open.
            }
          </p>
        </div>
      -->
      

      <div class="rgts-data-container">

        <!-- ==================== SUB-SECTION 1: STREAMER INDEX ==================== -->
        <div class="data-block-header">
          @if ($any(currentLang) === 'zh') {
            走地易: 今季和過去三季高水馬入三甲數據
          } @else {
            EasyPick: Current and Past 3 Seasons Streamer Index Data (Top 3 Finishers)
          }
        </div>

        <div class="horizontal-scroll-viewport">
          <div class="scroll-flex-track">
            
            <!-- Image 1 -->
            <div class="scroll-data-card">
              <span class="image-inner-label">P1</span>
              @if ($any(currentLang) === 'zh') {
                <a href="assets/img/streamer-index-p1.webp" target="_self">
                  <img src="assets/img/streamer-index-p1.webp" alt="Streamer Index P1" class="scroller-img-asset" />
                </a>
              } @else {
                <a href="assets/img/streamer-index-p1-eng.webp" target="_self">
                  <img src="assets/img/streamer-index-p1-eng.webp" alt="Streamer Index P1" class="scroller-img-asset" />
                </a>
              }
            </div>

            <!-- Image 2 -->
            <div class="scroll-data-card">
              <span class="image-inner-label">P2</span>
              @if ($any(currentLang) === 'zh') {
                <a href="assets/img/streamer-index-p2.webp" target="_self">
                  <img src="assets/img/streamer-index-p2.webp" alt="Streamer Index P2" class="scroller-img-asset" />
                </a>
              } @else {
                <a href="assets/img/streamer-index-p2-eng.webp" target="_self">
                  <img src="assets/img/streamer-index-p2-eng.webp" alt="Streamer Index P2" class="scroller-img-asset" />
                </a>
              }
            </div>

            <!-- Image 3 -->
            <div class="scroll-data-card">
              <span class="image-inner-label">P3</span>
              @if ($any(currentLang) === 'zh') {
                <a href="assets/img/streamer-index-p3.webp" target="_self">
                  <img src="assets/img/streamer-index-p3.webp" alt="Streamer Index P3" class="scroller-img-asset" />
                </a>
              } @else {
                <a href="assets/img/streamer-index-p3-eng.webp" target="_self">
                  <img src="assets/img/streamer-index-p3-eng.webp" alt="Streamer Index P3" class="scroller-img-asset" />
                </a>
              }
            </div>

            <!-- Image 4 -->
            <div class="scroll-data-card">
              <span class="image-inner-label">P4</span>
              @if ($any(currentLang) === 'zh') {
                <a href="assets/img/streamer-index-p4.webp" target="_self">
                  <img src="assets/img/streamer-index-p4.webp" alt="Streamer Index P4" class="scroller-img-asset" />
                </a>
              } @else {
                <a href="assets/img/streamer-index-p4-eng.webp" target="_self">
                  <img src="assets/img/streamer-index-p4-eng.webp" alt="Streamer Index P4" class="scroller-img-asset" />
                </a>
              }
            </div>
          </div>
        </div>


        <!-- ==================== SUB-SECTION 2: NSI DATA ==================== -->
        <div class="data-block-header style-divider-top">
          @if ($any(currentLang) === 'zh') {
            走地易: 今季和過去三季旺勢指數數據 (NSI)
          } @else {
            EasyPick: Current and Past 3 Seasons Number Strength Index (NSI) Summary
          }
        </div>

        <div class="horizontal-scroll-viewport">
          <div class="scroll-flex-track">
            
            <!-- Image 5 -->
            <div class="scroll-data-card">
              <span class="image-inner-label">P5</span>
              @if ($any(currentLang) === 'zh') {
                <a href="assets/img/nsi-summary-p5.webp" target="_self">
                  <img src="assets/img/nsi-summary-p5.webp" alt="NSI P5" class="scroller-img-asset" />
                </a>
              } @else {
                <a href="assets/img/nsi-summary-p5-eng.webp" target="_self">
                  <img src="assets/img/nsi-summary-p5-eng.webp" alt="NSI P5" class="scroller-img-asset" />
                </a>
              }
            </div>

            <!-- Image 6 -->
            <div class="scroll-data-card">
              <span class="image-inner-label">P6</span>
              @if ($any(currentLang) === 'zh') {
                <a href="assets/img/nsi-summary-p6.webp" target="_self">
                  <img src="assets/img/nsi-summary-p6.webp" alt="NSI P6" class="scroller-img-asset" />
                </a>
              } @else {
                <a href="assets/img/nsi-summary-p6-eng.webp" target="_self">
                  <img src="assets/img/nsi-summary-p6-eng.webp" alt="NSI P6" class="scroller-img-asset" />
                </a>
              }
            </div>

            <!-- Image 7 -->
            <div class="scroll-data-card">
              <span class="image-inner-label">P7</span>
              @if ($any(currentLang) === 'zh') {
                <a href="assets/img/nsi-summary-p7.webp" target="_self">
                  <img src="assets/img/nsi-summary-p7.webp" alt="NSI P7" class="scroller-img-asset" />
                </a>
              } @else {
                <a href="assets/img/nsi-summary-p7-eng.webp" target="_self">
                  <img src="assets/img/nsi-summary-p7-eng.webp" alt="NSI P7" class="scroller-img-asset" />
                </a>
              }
            </div>

            <!-- Image 8 -->
            <div class="scroll-data-card">
              <span class="image-inner-label">P8</span>
              @if ($any(currentLang) === 'zh') {
                <a href="assets/img/nsi-summary-p8.webp" target="_self">
                  <img src="assets/img/nsi-summary-p8.webp" alt="NSI P8" class="scroller-img-asset" />
                </a>
              } @else {
                <a href="assets/img/nsi-summary-p8-eng.webp" target="_self">
                  <img src="assets/img/nsi-summary-p8-eng.webp" alt="NSI P8" class="scroller-img-asset" />
                </a>
              }
            </div>
          </div>
        </div>

        <!-- =========================================================================
          👉 PLACE HERE: LIVE TRACKING MASTERCLASS STRATEGY CARD (BOTTOM)
             =========================================================================
        -->
        <div class="strategy-container">

          <!-- START: New block 09152026-->
          <!-- ==================== NEW SUB-SECTION 2: PORTRAIT RACE DAY DATA ==================== -->
          <!-- We add the "style-divider-top" class from your CSS file to change the left accent bar hue beautifully! -->
          <div class="data-block-header style-divider-top">
            @if ($any(currentLang) === 'zh') {
              <strong>走地易</strong>: 賽日數據回顧-9月13日
            } @else {
              <strong>EasyPick</strong>: Race Day Data Review-13092026
            }
          </div>

          <!-- 🟢 NATIVE CANTONESE TUTORIAL LAYOUT -->
          <div class="news-bulletin-wrapper text-container-card strategy-card-padding">
            @if ($any(currentLang) === 'zh') {
              <div class="news-card-body" style="padding-left: 0; padding-right: 0;">
                <p>選擇賽日： 由主頁按賽事重溫掣<strong>選擇 9月13日 沙田賽事</strong>，再按第10場走地易掣。</p>
                <p>於走地易介面內按<strong>「賽日數據」</strong>掣</p>
                <p>這個賽日數據整體唔理想，雖然高水馬入三甲最後都中到11唔算太差，但當中只有兩場中2，如果用我哋建議嘅一拖三響高水馬揀三匹馬和響旺指揀一匹馬，買連贏位置Q嘅話，效果唔理想，雖然第六場連贏派彩都有七百幾，但今期重點我哋想講吓尾場(第10場)嘅數據，先睇返啲數據(<strong>圖片1和圖片2</strong>)，旺指響第九場時祇係中3，而過去三個馬季旺指最低都會中到4，而呢場旺指最高頭三位馬匹中，只有一匹<strong>2號馬 友瑩亮(圖片3)</strong>同時亦係高水馬，睇返高水馬啲數據，第九場高水馬當時祇係中9，未達標因為過去三個馬季高水馬嘅中位數係大約12，所以呢場一定係用二號馬揸膽(<strong>圖片4</strong>)，但係要留意呢場高水馬有八匹，一般嚟講尾場嘅高水馬會較多但甚少有八匹咁多，呢種情況我哋認為可能係由於呢個賽馬日啲幕後大戶都贏唔到乜錢，所以各路人馬都想要博埋尾場，遇到呢種混亂情況加上整日數據表現一般，我哋建議轉用較簡單嘅投注方法，買3注獨贏3注位置，維持每場總注數唔超過6注，開開心心，簡簡單單地完成呢個數據唔理想嘅賽馬日，記住尾場唔應該加注，亦唔係追數嘅場次，因為尾場通常係全日最混亂嘅場次，而一個馬季大約有900個賽馬日，有需要逼自己一個賽馬日就定輸贏嗎? <strong>最好嘅做法</strong>，我哋建議係將每個賽馬日贏到嘅錢，預留一部分，當啲特別彩池如三T、六環彩等有好多累積嘅時候，不妨參與吓買番多少，而我哋嘅數據響第二場開跑前，所有場次已經有初步顯示可供參考，換句話講可以響呢啲特別彩池截止投注前，參考所有數據先投注比較有優勢。祝順利!</p>
              </div>
            } @else {
              <div class="news-card-body" style="padding-left: 0; padding-right: 0;">
                <p>Select Raceday: From the Home Page, click the Race Review button to <strong>select the Sha Tin races on September 13th</strong>, then click the EasyPick button for Race 10.</p>
                <p>Inside the EasyPick interface, click the <strong>"Race Day Data"</strong> button.</p>
                <p>The overall performance of the data on this raceday was subpar. Although the Streamer horses hitting the Top 3 ended up with 11 hits, which isn't too bad, only two of those races hit the Top 2. If you used our recommended 1-Banker-3-Legs strategy—selecting three horses from the Streamer index and one horse from the Number Strength Index to place Quinella and Swinger (Quinella Place) bets—the results would have been disappointing. Even though the Race 6 Quinella paid out over $700, the main focus for this session is to analyze the data from the final race (Race 10). Let’s look at the statistics first (<strong>Images P1 & 2</strong>). Up until Race 9, the Number Strength Index (NSI) had only registered 3 hits, whereas over the past three racing seasons, this index hit a minimum of 4. Among the top three horses in the NSI for this race, only one—<strong>No. 2 AEROVOLANIC (Image: P3)</strong>—was simultaneously a Streamer horse. Looking back at the Streamer data, Race 9 only had 9 hits, falling short of expectations since the median for Streamer horses over the last three seasons is around 12. Therefore, you should definitely use No. 2 as the Banker (<strong>Image: P4</strong>). However, note that there were 8 Streamer horses in this race. Generally speaking, while final races tend to have more Streamer horses, it is rare to see as many as eight. In this scenario, we believe that because the big syndicates and stable connections hadn't made much profit throughout the day, everyone was looking for a final gamble in the last race. Facing such a chaotic situation combined with the mediocre performance of the data all day, we suggest switching to a simpler betting approach: place 3 Win bets and 3 Place bets. This keeps your total bets under 6 per race, wrapping up an underperforming raceday happily and simply. Remember, you should never increase your stakes or chase losses on the final race, as it is usually the most chaotic race of the entire day. With around 900 race meetings in a single season, is there really a need to force a make-or-break outcome on a single day? <strong>As a best practice</strong>, we recommend reserving a portion of the profits you make from each successful raceday. When exotic pools like the Triple Trio or Six Up have huge jackpots carried over, you can comfortably buy a few tickets to participate. Our data provides preliminary indicators for all races before the start of Race 2. In other words, you have a distinct advantage as you can reference the complete dataset right before these exotic pools close for betting. Good luck!</p>
              </div>
            }

          </div>

          <div class="horizontal-scroll-viewport">
            <div class="scroll-flex-track">
              
              <!-- Portrait Card 1 -->
              <!-- Added the modifier class "portrait-row-card" to adapt sizes -->
              <div class="scroll-data-card portrait-row-card">
                <!-- <span class="image-inner-label">高水馬-09132026</span> -->
                @if ($any(currentLang) === 'zh') {
                  <span class="image-inner-label">圖片1-高水馬</span>
                  <a href="assets/img/race-day-data-streamer-09132026.webp" target="_self">
                    <img src="assets/img/race-day-data-streamer-09132026.webp" alt="Race Day Data Streamer 09132026" class="scroller-img-asset" />
                  </a>
                } @else {
                  <span class="image-inner-label">P1-Streamer</span>
                  <a href="assets/img/race-day-data-streamer-09132026-eng.webp" target="_self">
                    <img src="assets/img/race-day-data-streamer-09132026-eng.webp" alt="Race Day Data Streamer 09132026" class="scroller-img-asset" />
                  </a>
                }
              </div>

              <div class="scroll-data-card portrait-row-card">
                <!-- <span class="image-inner-label">高水馬-09132026</span> -->
                @if ($any(currentLang) === 'zh') {
                  <span class="image-inner-label">圖片2-旺勢指數</span>
                  <a href="assets/img/race-day-data-NSI-09132026.webp" target="_self">
                    <img src="assets/img/race-day-data-NSI-09132026.webp" alt="Race Day Data NSI 09132026" class="scroller-img-asset" />
                  </a>
                } @else {
                  <span class="image-inner-label">P2-NSI</span>
                  <a href="assets/img/race-day-data-NSI-09132026-eng.webp" target="_self">
                    <img src="assets/img/race-day-data-NSI-09132026-eng.webp" alt="Race Day Data NSI 09132026" class="scroller-img-asset" />
                  </a>
                }
              </div>

              <div class="scroll-data-card portrait-row-card">
                <!-- <span class="image-inner-label">高水馬-09132026</span> -->
                @if ($any(currentLang) === 'zh') {
                  <span class="image-inner-label">圖片3-友瑩亮</span>
                  <a href="assets/img/race-day-data-EasyPick-09132026.webp" target="_self">
                    <img src="assets/img/race-day-data-EasyPick-09132026.webp" alt="Race Day Data EasyPick 09132026" class="scroller-img-asset" />
                  </a>
                } @else {
                  <span class="image-inner-label">P3-AEROVOLANIC</span>
                  <a href="assets/img/race-day-data-EasyPick-09132026-Eng.webp" target="_self">
                    <img src="assets/img/race-day-data-EasyPick-09132026-Eng.webp" alt="Race Day Data EasyPick 09132026" class="scroller-img-asset" />
                  </a>
                }
              </div>

              <div class="scroll-data-card portrait-row-card">
                <!-- <span class="image-inner-label">高水馬-09132026</span> -->
                @if ($any(currentLang) === 'zh') {
                  <span class="image-inner-label">圖片4-派彩</span>
                  <a href="assets/img/race-day-data-Dividend-09132026.webp" target="_self">
                    <img src="assets/img/race-day-data-Dividend-09132026.webp" alt="Race Day Data Dividend 09132026" class="scroller-img-asset" />
                  </a>
                } @else {
                  <span class="image-inner-label">P4-Dividend</span>
                  <a href="assets/img/race-day-data-Dividend-09132026-Eng.webp" target="_self">
                    <img src="assets/img/race-day-data-Dividend-09132026-Eng.webp" alt="Race Day Data Dividend 09132026" class="scroller-img-asset" />
                  </a>
                }
              </div>

              <!-- Add more portrait cards here as your dataset grows -->
            </div>
            <!-- END: <div class="scroll-flex-track"> -->
          </div>



          <!-- END: New block 09152026-->

          
          <div class="data-block-header style-divider-top">
            @if ($any(currentLang) === 'zh') {
              走地易: 大數據實戰案例：如何利用「歷史平均值」揀選馬膽？
            } @else {
              EasyPick: Live Tracking Masterclass Case Study: Using "Regression to the Mean" to Screen Banker Horse
            }
          </div>

          <div class="news-bulletin-wrapper text-container-card strategy-card-padding">
            
            @if ($any(currentLang) === 'zh') {
              <!-- CANTONESE WEB TUTORIAL LAYOUT -->
              <div class="news-card-header" style="padding-left: 0; padding-right: 0;">
                📊 均值回歸規律：避開或減少採用「超買」數據馬匹做膽，超買 = 中晒三匹馬(三重彩)。
              </div>

              <!-- 
                <div class="news-card-body" style="padding-left: 0; padding-right: 0;">
                  <p>選擇案例賽日： 由主頁按賽事重溫掣<strong>選擇9月6日沙田賽事</strong>，再按走地易掣</p>
                  <p>於走地易介面內再按賽日數據掣<strong>賽日數據</strong>賽日數據，觀察一個非常關鍵的大數據「均值回歸」現象：</p>
                  <p>🔹 <strong>第1場：</strong>高水馬數據中3<strong>(超買?)</strong>而緊接的 <strong>第2場</strong>，立刻回調至 <strong>中0</strong>。</p>
                  <p>🔹 <strong>第7場：</strong>高水馬數據再次中3 <strong>(超買?)</strong>同樣地 <strong>第8場</strong>，回調至 <strong>中0</strong>。</p>
                  <p><strong>💡 實戰部署：</strong>高水馬過去3個馬季，每個賽日平均命中基數大約維持在 <strong>12</strong> 左右。當某一場超買(中3)情況出現後，下一場極大機率會出現均值回調模式。此時揀馬膽建議轉用另一組數據<strong>旺勢指數</strong>，中的馬匹。</p>
                  <p>注意: 以上做法亦適用於當高水馬或旺勢指數的即日數據已超越其本身的中位數。</p>
                </div>
              -->

              <!-- 🟢 NATIVE CANTONESE TUTORIAL LAYOUT -->
              <div class="news-card-body" style="padding-left: 0; padding-right: 0;">
                <p>選擇案例賽日： 由主頁按賽事重溫掣<strong>選擇 9月6日 沙田賽事</strong>，再按走地易掣。</p>
                <p>於走地易介面內再按<strong>「賽日數據」</strong>掣，觀察一個非常關鍵的大數據「均值回歸」現象：</p>
                <p>🔹 <strong>第1場：</strong>高水馬數據中3 <strong>(超買?)</strong>，而緊接的 <strong>第2場</strong>，立刻回調至 <strong>中0</strong>。</p>
                <p>🔹 <strong>第7場：</strong>高水馬數據再次中3 <strong>(超買?)</strong>，同樣地 <strong>第8場</strong>，回調至 <strong>中0</strong>。</p>
                <p><strong>💡 實戰部署：</strong>高水馬過去3個馬季，每個賽日平均命中基數大約維持在 <strong>12</strong> 左右。當某一場超買(中3)情況出現後，下一場極大機率會出現均值回調模式。此時揀馬膽建議轉用另一組數據 —— <strong>旺勢指數</strong> 中最高頭三位的馬匹。</p>
                <p style="background-color: #111418; padding: 10px; border-radius: 6px; color: #ffdf00; border: 1px solid #27272a; margin-top: 12px; font-size: 14.5px;">
                  📌 <strong>注意：</strong>以上做法亦適用於當高水馬或旺勢指數的即日數據已超越其本身的中位數。
                </p>
              </div>

            } @else {
              <!-- 🔵 PROFESSIONAL ENGLISH TUTORIAL LAYOUT -->
              <div class="news-card-header" style="padding-left: 0; padding-right: 0;">
                📊 Law of Mean Reversion: Avoid or reduce using "Overbought" data horses as your banker. (Overbought = All top 3 selections finish in the money / Tierce hit).
              </div>
              <div class="news-card-body" style="padding-left: 0; padding-right: 0;">
                <p><strong>Case Study Execution:</strong> From the App Main Home Board, tap the Race Review button and <strong>select the Sept 6 Sha Tin Meeting</strong>, then tap the Streamer (EasyPick) button.</p>
                <p>Inside the EasyPick interface, tap the <strong>"Race Day Data"</strong> button to observe a highly critical big data "Mean Reversion" phenomenon:</p>
                <p>🔹 <strong>Race 1:</strong> Streamer Index scores a 3-for-3 podium sweep <strong>(Overbought?)</strong>. In the immediate next race, <strong>Race 2</strong>, it instantly regresses to <strong>0 hits</strong>.</p>
                <p>🔹 <strong>Race 7:</strong> Streamer Index scores another 3-for-3 sweep <strong>(Overbought?)</strong>. True to the mathematical pattern, <strong>Race 8</strong> regresses straight to <strong>0 hits</strong>.</p>
                <p><strong>💡 Live Tweak Strategy:</strong> Over the past 3 racing seasons, the historical daily median hit rate for the Streamer Index consistently anchors around <strong>12</strong>. Once an "Overbought" (3-for-3) anomaly occurs in a single race, the model carries an ultra-high statistical probability to trigger a cooling phase in the next race. In these fallback windows, it is highly recommended to select your banker horses from the top 3 rows of our independent <strong>Number Strength Index (NSI)</strong> instead.</p>
                <p style="background-color: #111418; padding: 10px; border-radius: 6px; color: #ffdf00; border: 1px solid #27272a; margin-top: 12px; font-size: 14.5px;">
                  📌 <strong>Note:</strong> This logical operational counter-strategy also applies whenever the daily cumulative score of either the Streamer Index or the NSI has already surpassed its long-term seasonal median threshold.
                </p>
              </div>
            }

          </div>
        </div>
        <!-- END: <div class="strategy-container"> -->

      </div>
      <!-- END; <div class="rgts-data-container"> -->
    </div>
    <!-- END: <div class="rgts-data-container"> -->
  }
</div>
<!-- END: <div class="bulletin-app-layout"> -->


    <!-- 🏆 CARD 1: OFFICIAL HKJC RACEDAY SNAPSHOT -->
    <div class="news-bulletin-wrapper text-container-card">

      <img src="assets/img/raceinfo-09232026-1080-720.webp" alt="Race Info 09232026" class="responsive-img" />

      <div class="news-card-header">
        @if ($any(currentLang) === 'zh') {
          賽事日期: 23/09/2026 (星期三) <br>
          9場 首場開跑時間: 18:40
        } @else {
          Race Meeting: 23/09/2026 (Wed) <br>
          9 races - Meeting Start Time: 18:40
        }
      </div>

      <div class="news-card-body">
        <!-- 💡 PLACE SEC-4 DATA LAYOUT HERE (Track, Going, Stewards) -->
        <p style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 12px; margin-top: 5px;">
          @if ($any(currentLang) === 'zh') {
            <strong>📍 場地資訊 :</strong> 跑馬地 - 草地 'C' 賽道 (向後移欄) — <span class="badge-going">好地</span>
          } @else {
            <strong>📍 Track & Going Info :</strong> Happy Valley - Turf "C" Course (Back Straight) — <span class="badge-going">Good</span>
          }
        </p>
        
        <p style="margin-top: 10px; line-height: 1.5;">
          <strong>⚖️ @if ($any(currentLang) === 'zh') { 競賽董事小組 : } @else { Racing Stewards Panel : }</strong>
          <span style="display: block; font-size: 14.5px; color: #cbd5e1; margin-top: 5px; padding-left: 8px;">
            @if ($any(currentLang) === 'zh') {
              陳衍里醫生 (賽事主席) / 陳錦榮先生 / <span class="highlight-line">方顯韜先生 (首席受薪董事)</span> / 貝義理先生 / 韋修良先生 / 郭子貽先生 / 何佐謙先生
            } @else {
              Dr Eric Chan Yin Lee (Chairman) / Mr Alastair Chan Kam Wing / <span class="highlight-line">Mr Marc Van Gestel (Chief Stipendiary Steward)</span> / Mr G Carpenter / Mr H L Walmsley / Mr K C Y Kwok / Mr J C H Ho
            }
          </span>
        </p>
      </div>
    </div>





//CSS: 

.bg-matrix-theme {
  --background: #0b0c10;
}

.hero-container {
  text-align: center;
  padding: 40px 10px 20px 10px;
  background: radial-gradient(circle at center, #1f2833 0%, #0b0c10 100%);
}

.main-title {
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 8px 0;
  letter-spacing: 1px;
}

.sub-title {
  font-size: 18px;
  font-weight: 600;
  color: #a3704c;
  margin: 0 0 12px 0;
}

.brand-hook {
  font-size: 13px;
  color: #66fcf1;
  margin: 0;
}

.download-action-wrapper {
  display: flex;
  justify-content: center;
  margin: 10px auto 30px auto;
  max-width: 340px;
  padding: 0 10px;
}

.store-badge-btn {
  display: inline-flex;
  align-items: center;
  background-color: #000000;
  color: #ffffff !important;
  text-decoration: none !important;
  padding: 12px 20px;
  border-radius: 10px;
  border: 1.5px solid #a3704c;
  width: 100%;
  box-sizing: border-box;
}

.badge-icon { font-size: 28px; margin-right: 12px; display: flex; align-items: center; }
.badge-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  small { font-size: 8.5px; color: #bfa18f; margin-bottom: 2px; }
  strong { font-size: 13.5px; }
}

/* Structural Layout Card Wrappers */
.guide-card-wrapper {
  background-color: #1f2833;
  border-radius: 12px;
  padding: 22px;
  margin: 0 auto 25px auto;
  max-width: 480px;
  box-sizing: border-box;

  margin-top: 15px; //Added for RGTS QuickStart
}

.highlight-container-card {
  border: 1.5px solid #a3704c;
  box-shadow: 0 4px 20px rgba(163, 112, 76, 0.1);
}

.text-container-card {
  border: 1px solid #45a29e;
}

.guide-card-header {
  font-size: 26px; //Changed 09032026 from 17 to 26
  font-weight: 700;
  color: #ffffff;
  // margin-bottom: 15px; REMARK: 09032026
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 8px;
}

/* Highly Scannable Punchy Ordered List */
.punchy-ordered-list {
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  li {
    font-size: 13.5px;
    color: #c5c6c7;
    line-height: 1.6;
    
    strong { color: #ffffff; }
  }
}

.simple-rule-p {
  font-size: 13.5px;
  line-height: 1.6;
  color: #c5c6c7;
  margin: 0 0 20px 0;
  
  strong { color: #66fcf1; }
}

/* Mock Application Interface Display Classes */
.mock-ui-display {
  background-color: #0b0c10;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.03);
}

.ui-row {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.ui-color-box {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  width: max-content;
}

.cell-green { background-color: #2dd36f; color: #ffffff; }
.cell-gold { background-color: #ffc409; color: #000000; }

.ui-desc {
  font-size: 12.5px;
  line-height: 1.5;
  color: #a6a6a6;
}

.final-shortcut-p {
  font-size: 13px;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  margin: 0 0 20px 0;
}

/* Bulletproof Custom Button Properties — Defends Against Hydration Shifts */
.custom-warning-btn {
  --background: #ffc409 !important;
  --background-activated: #e0ac08 !important;
  --color: #000000 !important;
  font-weight: 700 !important;
  font-size: 13px !important;
  letter-spacing: 0.2px;
  
  display: block !important;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  box-sizing: border-box !important;
}


/* Enhance the Main Header Branding Blocks */
.main-title {
  font-size: 34px; /* Increased from 32px */
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 10px 0;
}

.sub-title {
  font-size: 20px; /* Increased from 18px */
  font-weight: 600;
  color: #a3704c;
  margin: 0 0 12px 0;
}

/* Optimize the 30-Second Quickstart Checklist */
.punchy-ordered-list {
  padding-left: 24px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px; /* Increased spacing between items */
  
  li {
    font-size: 15.5px; /* Increased from 13.5px for instant readability */
    color: #c5c6c7;
    line-height: 1.7;  /* Increased line height to prevent crowding */
    
    strong { color: #ffffff; font-size: 16px; }
  }
}

/* Optimize the EasyPick Quick-Rule Paragraphs */
.simple-rule-p {
  font-size: 15.5px; /* Increased from 13.5px */
  line-height: 1.7;
  color: #c5c6c7;
  margin: 0 0 20px 0;
}

/* Enhance the Mock UI Interface Text Strings */
.ui-desc {
  font-size: 14px; /* Increased from 12.5px */
  line-height: 1.6;
  color: #c5c6c7; /* Brightened slightly for higher dark-mode contrast */
}

.ui-color-box {
  display: inline-block;
  font-size: 12px; /* Increased from 11px */
  font-weight: 700;
  padding: 4px 10px; /* Added more padding to make the indicator look premium */
  border-radius: 4px;
  width: max-content;
}


//Fr test-quickstart

// ion-grid {
//     --ion-grid-padding-sm: 20px;
//     --ion-grid-padding-md: 30px;
//     --ion-grid-padding-lg: 40px;
//     --ion-grid-padding-xl: 100px;
// }

ion-img, img {
    touch-action: pan-x pan-y;
    user-select: none;
}

img {
    touch-action: pan-x pan-y;
    user-select: none;
    transition: transform 0.25s ease;
}

// img.responsive-img {
//     max-width: 100%;       /* Ensures the image does not exceed the width of its container */
//     max-height: 33.33vh;   /* Limits the image height to one-third of the viewport height */
//     height: auto;          /* Maintains the original aspect ratio */
//     width: auto;           /* Ensures the image scales proportionately */
//     touch-action: pan-x pan-y;
//     user-select: none;
//     transition: transform 0.25s ease;
//   }

  /*
  img.responsive-img {
    max-width: 100%;
    max-height: 33.33vh;   // Limits the image height to one-third of the viewport height 
    height: auto;
    width: auto;
    touch-action: manipulation;
    user-select: none;
    transition: transform 0.25s ease;
  }
  */
  
    /*
        img.responsive-img-no-max-height {

            max-width: 100%;
            // max-height: 33.33vh; //NOTE: 06072026 Cannot use this as it will make the img very small 
                                    // Limits the image height to one-third of the viewport height 
            // height: auto;
            // width: auto;

            width: 203px;
            height: 496px;
            object-fit: cover;   // keeps aspect ratio, crops if needed
            touch-action: manipulation;
            user-select: none;
            transition: transform 0.25s ease;

        }
    */

    /* BKUP: 06122026
        img.responsive-img-no-max-height {
            max-width: 100%;        // flex inside ion-col
            height: auto;           // preserve aspect ratio
            max-height: 80vh;       // optional: cap height to viewport NOTE: 06082026 Changed to 90vh
            object-fit: cover;      // crop if needed, keeps ratio
            touch-action: manipulation;
            user-select: none;
            transition: transform 0.25s ease;
        }


        .custom-col {
            flex: 1; // Forces columns to share width equally, just like ion-col
            padding: 5px; // Optional: adds spacing between columns
        }
    */


/* Add these styles to your component's SCSS file */
// .zoom-enabled {
//     touch-action: pan-x pan-y;
//     user-select: none;
//     transition: transform 0.25s ease;
//   }
  
//   .zoom-enabled img {
//     max-width: 100%;
//     max-height: 33.33vh;  /* Adjust height as needed */
//     height: auto;
//     width: auto;
//   }
  

  
// img {
//     transition: transform 0.25s ease;
// }
  

ion-card{
    background: cornsilk;
}

ion-card-title{
    color: black;
}

.swiper-button-next{
    font-weight: 900;
}

.swiper-button-prev{
    font-weight: 900;
}
.swiper {
    --swiper-pagination-color: #fff;
}

.swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 16px));
    height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 16px));
}

.img-wrapper {
    // min-height: 200px;
    // width: 100%;
    // background-size: cover;
    // background-repeat: no-repeat;
    width: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 90vh;
}
//url(assets/img/Snapshot_7.PNG)
// ion-content{
//     // --background: url('assets/img/Snapshot_7.PNG')  no-repeat cover fixed center;

//     // background: url('assets/img/Snapshot_7.PNG') no-repeat fixed center; 
//     // -webkit-background-size: cover;
//     // -moz-background-size: cover;
//     // background-size: cover;

//     --background:none;
//     background:url('assets/img/Snapshot_7.PNG');
//     background-size: 100% 100%;
//     background-position: center center;

.scan_problems{
    display: flex;
    justify-content: center;
}

.quickStarted{
    font-size: 18px;
    color: black;
    font-weight: 500;
}
.text_bolder{
    font-weight:bolder;
    color: red;
    font-size: larger;
}

img{
    display: block;
    margin: auto;
}

#right-3lines {
    position: relative;
    float: left;
    // width: 81%;
    // padding-top: 3px;
    // padding-bottom: 2px;
    // height:100%;
}


    // This wrapping container is the secret to protecting your H1 tag

    /* BKUP: 06122026
        .custom-col {
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    */

/* BKUP: 06122026
    .scrollable-row-container {
    width: 100%;
    overflow-x: auto;          // Keeps horizontal swiping working 
    overflow-y: auto;          // FIX: Allows page to scroll down/up when images grow vertically 
    -webkit-overflow-scrolling: touch; // Ensures smooth, native feeling momentum physics 
    }

    .custom-row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: max-content;        
    align-items: flex-start;   // FIX: Prevents columns from snapping to weird heights during zoom
    }
*/


// img.zoom-image {
//   max-width: 100%;
//   height: auto;
//   max-height: 80vh;
//   object-fit: cover;
//   /* 'pinch-zoom' lets the device zoom the image directly, 'pan-y' keeps page scrolling alive */
//   touch-action: pan-y pinch-zoom; 
// }

img.zoom-image {
  max-width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: cover;
  
  /* FIX: 'pan-x' fixes horizontal scrolling, 'pan-y' fixes vertical scrolling, 'pinch-zoom' handles the fingers */
  touch-action: pan-x pan-y pinch-zoom; 
}



    /* ========================================== */
    /* 1. MOBILE GESTURE LAYOUT (Base Settings)   */
    /* ========================================== */
    .scrollable-row-container {
        width: 100%;
        overflow-x: auto;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    .custom-row {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: max-content; /* Keeps items side-by-side for horizontal finger swipes */
        align-items: flex-start;
    }

    .custom-col {
        flex: 1;
        padding: 5px;
    }


    /* 06122026 From Genimi
        img.responsive-img-no-max-height {
            width: 100%;
            height: auto;
            max-height: 75vh; // Caps vertical height on phone screens to prevent long scrolling 
            object-fit: contain;
        }
    */

    /*
        img.responsive-img-no-max-height {
            max-width: 100%;        // flex inside ion-col
            height: auto;           // preserve aspect ratio
            max-height: 80vh;       // optional: cap height to viewport NOTE: 06082026 Changed to 90vh
            object-fit: cover;      // crop if needed, keeps ratio
            touch-action: manipulation;
            user-select: none;
            transition: transform 0.25s ease;
        }
    */

    /* 1. MOBILE SETTINGS (Keep your touch rules) */
    /* ========================================== */
    img.responsive-img-no-max-height {
        max-width: 100%;
        height: auto;
        max-height: 80vh; /* Capped for mobile screens */
        object-fit: cover; /* Fine for mobile swiping */
        touch-action: manipulation;
        user-select: none;
        transition: transform 0.25s ease;
    }


// 核心響應式容器：完美繼承你喜歡的桌機置中佈局
.news-bulletin-wrapper {
  background-color: #1a1e24; // 稍微加深底色，給人沉穩、榮譽的報章質感
  border-radius: 12px;
  // margin: 0 auto 25px auto;
  margin: 15px auto 25px auto; // 👈 FIX: Reduced top margin to 15px for tight vertical stacking
  max-width: 480px;          // 👈 核心：限制桌機最大寬度，防止橫向無限拉扯
  box-sizing: border-box;
  margin-top: 15px;
  overflow: hidden;          // 確保上方圖片的圓角不會被切掉
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); // 增加立體陰影層次
  // padding-top: 30px;
  overflow: auto;
}

// 邊框樣式：改為尊貴的馬王榮譽金/銅色調
.text-container-card {
  border: 1px solid #d4af37; // 👈 金色（Gold）高質感邊框，呼應一級賽冠軍榮譽
}

// 響應式圖片設定
.responsive-img {
  width: 100%;
  height: 240px;            // 在 480px 寬度下保持黃金比例
  object-fit: cover;
  display: block;
}

// 新聞大標題樣式
.news-card-header {
  font-size: 22px;          // 調校至最舒適的標題大小
  font-weight: 700;
  color: #ffffff;
  padding: 18px 20px 8px 20px;
  line-height: 1.4;
}

// 新聞內文樣式
.news-card-body {
  padding: 0 20px 15px 20px;
  
  p {
    font-size: 17px;
    line-height: 1.6;
    color: #cbd5e1;         // 柔和的灰白字體，長時間閱讀不傷眼
    margin-bottom: 12px;

    strong {
      color: #ffdf00;       // 內文關鍵數據（如24勝、2.88億）用亮金色強調
      font-weight: bold;
    }
  }
}

  // 按鈕跳轉區樣式
  /* REMARK: 09032026 Followings are for ion-button and try use the native button instead
    .news-card-actions {
      padding: 5px 20px 22px 20px;
      text-align: center;

      .read-more-btn {
        --background: #d4af37;   // 按鈕背景採用金色
        --background-activated: #aa8c2c;
        --color: #1a1e24;        // 文字採用深色對比
        font-weight: bold;
        font-size: 16px;
        width: 100%;             // 手機端滿寬好點擊
        margin: 0;
        --border-radius: 6px;
      }
    }
  */

.news-card-actions {
  padding: 5px 20px 22px 20px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}

// Ensures the link anchor tag spans full width inside your 480px centered box
.read-more-link-wrapper {
  display: block;
  width: 100%;
  text-decoration: none; // Removes default underline links
}

// 🏆 Champions Trophy Gold Native Button: Renders instantly on GitHub Pages!
.read-more-btn-native {
  background-color: #d4af37; // High-contrast Premium Gold Base
  color: #1a1e24;            // Deep charcoal text contrast color
  border: none;
  font-size: 16px;
  font-weight: bold;
  width: 100%;               // Stretches to full width for comfortable mobile tapping
  padding: 12px 0;           // Generous vertical padding footprint for mobile hitboxes
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  display: block;
  outline: none;

  // Active push-down feedback state animation for mobile gestures
  &:active {
    background-color: #aa8c2c; // Darker gold shade when pressed down
    transform: scale(0.99);    // Subtle compression effect
  }
}




// Centered layout shell to keep everything aligned perfectly in the middle of the desktop screen
.bulletin-header-container {
  max-width: 480px;          // 👈 Crucial: Matches your card width exactly!
  // margin: 20px auto 10px auto; // Centers horizontally with a clean top margin
  margin: 20px auto 0 auto;  // 👈 FIX: Set bottom margin to 0 so the next div sits right below it!
  padding: 0 10px;
  box-sizing: border-box;
  width: 100%;
}

// Language wrapper layout row
.language-row {
  display: flex;
  justify-content: flex-end; // Flushes your language selector to the top right of your centered box
  margin-bottom: 15px;
  width: 100%;
}

// Modern, high-performance native buttons that match Ionic's aesthetic but render instantly
.native-lang-btn {
  background: var(--ion-color-primary, #3880ff);
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  transition: background-color 0.2s;

  &:active {
    background: var(--ion-color-primary-shade, #3171e0);
  }
}

// Navigation button block layout
.navigation-button-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 6px; // Uniform spacing gaps between button columns
  width: 100%;

  button {
    flex: 1;                 // Forces all 3 buttons to maintain equal column widths dynamically
    background-color: #1a1e24; // Matches your card's background color scheme
    color: #cbd5e1;
    border: 1px solid #334155;
    padding: 10px 4px;
    font-size: 15px;         // Optimized font footprint prevents text truncation on narrow screens
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-align: center;
    box-sizing: border-box;

    // Active state highlighting configuration
    &.active {
      background-color: #d4af37; // Highlight with your Champions Trophy Gold!
      border-color: #d4af37;
      color: #1a1e24;            // High-contrast text layout color
    }
  }
}

// 🏆 FIX: Forces all inner components to stack tightly without vertical gap leaks
.bulletin-app-layout {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // Locks elements closely from top to bottom
  align-items: center;
  width: 100%;
  height: auto;                // Overrides any stretching heights
  min-height: 100vh;
  box-sizing: border-box;
  padding-bottom: 50px;
}

.bulletin-header-container {
  max-width: 480px;          
  margin: 20px auto 0 auto;  // Kept bottom margin flush
  padding: 0 16px;
  box-sizing: border-box;
  width: 100%;
}

.news-bulletin-wrapper {
  background-color: #1a1e24; 
  border-radius: 12px;
  margin: 15px auto 25px auto; // 15px gap tightly follows your tab bars
  max-width: 480px;          
  box-sizing: border-box;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35); 
  overflow: auto; 
}

  //RGTS DATA SECTION

// Outermost container wrapping your data modules
.rgts-data-container {
  width: 100%;
  max-width: 480px;            // 👈 Locks alignment perfectly with your header buttons and news card
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 10px;
  overflow: auto;
}

// Unified High-Grade Headers matching your Champions Trophy scheme
.data-block-header {
  font-size: 18px;
  font-weight: 700;
  color: #ffdf00;              // Bright Gold header text ensures high readability
  margin: 20px 0 12px 0;
  padding-left: 6px;
  border-left: 3px solid #d4af37; // Solid Gold left accent bar
  line-height: 1.4;
  text-align: left;
}

// Dynamic divider line to separate sub-section blocks elegantly
.style-divider-top {
  margin-top: 35px;
  border-left-color: #45a29e;  // Changes left bar hue to separate visual modules cleanly
}

// 🏆 THE ULTIMATE SWIPING TRACK ENGINE (Bypasses Ionic clipping artifacts entirely)
.horizontal-scroll-viewport {
  width: 100%;
  overflow-x: auto;            // 👈 Enables native fluid finger swipes horizontally
  overflow-y: hidden;          // Strictly blocks broken vertical leakage jitter
  background-color: #1a1e24;   // Dark backdrop matches your overall theme canvas
  border-radius: 12px;
  border: 1px solid #334155;
  padding: 16px 12px;
  box-sizing: border-box;
  margin-bottom: 12px;
  -webkit-overflow-scrolling: touch; // Forces smooth hardware acceleration physics on iOS/Safari views

  // Custom styling rules to optimize the scrollbar design profile
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #d4af37;
    border-radius: 10px;
  }
}

/*
// Linear flex ribbon tracking track vector
.scroll-flex-track {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;           // 👈 Crucial: Keeps images standing side-by-side infinitely
  width: max-content;          // Forces track width to absorb child image dimensions natively
  gap: 14px;                   // Perfectly uniform spacing gutter gap width
}
*/

// Optional minor tweak: Add a small spacer to your scrolling track container
// to prevent clipping when the edge images expand.
.scroll-flex-track {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;           
  width: max-content;          
  gap: 14px;                   
  padding: 10px 40px;          // 👈 Added side-padding padding buffers for zoom headrooms
}

/*
  // Individual internal image display cards
  .scroll-data-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

// 1. The Parent Container stays FIXED in place—never moves, never flickers!
.scroll-data-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;

  // 🚀 TRIGGER ZOOM FROM THE PARENT: Keeps the touch hitbox stable!
  &:hover .scroller-img-asset, 
  &:active .scroller-img-asset {
    transform: scale(1.6);
    z-index: 99;
    box-shadow: 0 12px 28px rgba(0,0,0,0.6);
  }
}
*/


// 1. The Parent Container stays completely FIXED in place - never moves!
.scroll-data-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  // Make sure the link inside spans cleanly without adding broken hitboxes
  a {
    display: block;
    width: auto;
    height: auto;
    text-decoration: none;
    outline: none;
  }

  // 🚀 STABLE DESKTOP ZOOM: Trigger the scale from the parent card hover state
  &:hover .scroller-img-asset {
    transform: scale(1.15); // 👈 Gentle zoom on hover for desktop without breaking bounds
    z-index: 99;
    box-shadow: 0 12px 28px rgba(0,0,0,0.6);
  }
}


// Tiny overlay label text (P1, P2, etc.) above graphics
.image-inner-label {
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.65);
  padding: 2px 10px;
  border-radius: 20px;
  margin-bottom: 8px;
  border: 1px solid #475569;
}

/*
  // 📊 HIGH-PERFORMANCE DATA CHART OPTIMIZATION
  .scroller-img-asset {
    display: block;
    width: auto;
    height: 250px;               // 👈 Golden rule: Static container height prevents layout shift crashes
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.4);
    object-fit: contain;         // Protects text legends from text compression blurring or warping
  }
*/

/*
  // 📊 HIGH-PERFORMANCE DATA CHART OPTIMIZATION
  .scroller-img-asset {
    display: block;
    width: auto;
    height: 240px;               // Slightly adjusted to make room for touch expansion
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.4);
    object-fit: contain;         
    
    // 🛠️ ADD THIS: Prepares the image for smooth hardware-accelerated zooming animations
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform-origin: center center; // Zooms cleanly from the middle of the chart
    position: relative;
    z-index: 1;
    cursor: pointer;

    // 🚀 THE TOUCH-ZOOM ENGINE: Fires when users tap and hold on mobile or hover on desktop!
    &:active, &:hover {
      transform: scale(1.6);     // 👈 Zooms the graphic by 160% instantly on touch!
      z-index: 99;               // Floats the chart completely above your layout boundaries
      box-shadow: 0 12px 28px rgba(0,0,0,0.6); // Deepens shadow for a true "pop-out" 3D effect
    }
  }


// 2. The Image Component—smooth and stable
.scroller-img-asset {
  display: block;
  width: auto;
  height: 240px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  object-fit: contain;         
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform-origin: center center;
  position: relative;
  z-index: 1;
  
  // 🛠️ FIX: Bypasses browser touch conflicts cleanly
  touch-action: manipulation; // Better than 'auto' for modern swiping scroll containers
  pointer-events: none;       // Forces the browser to listen to the parent container box instead!
}
*/

// 2. The Image Component Style Profile
.scroller-img-asset {
  display: block;
  width: auto;
  height: 240px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  object-fit: contain;         
  
  // Smooth out the animation transition curves
  transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform-origin: center center;
  position: relative;
  z-index: 1;
  cursor: zoom-in; // 👈 Visual anchor: changes cursor to a magnifying glass on desktop!
  
  // Bypasses browser touch conflicts cleanly
  touch-action: manipulation;
  pointer-events: auto; // Restores direct clicking capabilities for desktop links
}




// Text block explanation panels
.data-explanation-box {
  background-color: #111418;
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 10px;
  border: 1px solid #27272a;

  p {
    font-size: 13.5px;
    line-height: 1.6;
    color: #cbd5e1;
    margin: 0;

    strong {
      color: #ffdf00;          // Highlights keyword headers
    }
  }
}

.strategy-container {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  box-sizing: border-box;
}

.strategy-card-padding {
  padding: 20px;
  margin-bottom: 40px; // Adds bottom headroom padding spacing
}

// Added 09152026
/* ========================================================================== */
/* Portrait Image Data Section Adaptations                                    */
/* ========================================================================== */

/* Overrides the aspect container footprint specifically for portrait lists */
.scroll-data-card.portrait-row-card .scroller-img-asset {
  /* Increases height footprint so text inside the vertical charts stays crystal clear */
  height: 380px; 
  width: auto;
  
  /* Ensures the vertical canvas maps correctly to device dimensions without distortion */
  object-fit: contain; 
}

/* Stable desktop scale fine-tuning specifically for the portrait list */
.scroll-data-card.portrait-row-card:hover .scroller-img-asset {
  /* Reduced scale slightly (from your default 1.15) to prevent vertical overflow clipping */
  transform: scale(1.1); 
}

//Added: 09232026
/* Custom dashboard refinement for raw official summaries */
.data-explanation-box.summary-card {
  padding: 14px 18px;
  margin-bottom: 15px;
  /* Reusing a clean accent left-border using your matrix color profile */
  border-left: 3.5px solid #45a29e; 
}

.summary-card-title {
  font-size: 15px !important;
  color: #ffffff !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 6px;
  margin-bottom: 10px !important;
}

.summary-card-body-lines p {
  font-size: 14px !important;
  line-height: 1.75 !important;
  color: #cbd5e1 !important; /* Soft grey text minimizes eye strain */
  margin: 4px 0 !important;
}

/* Gives the active course details and chief official structural visual weight */
.summary-card-body-lines .highlight-line,
.summary-card-body-lines .highlight-steward {
  color: #66fcf1 !important; /* Premium electric cyan highlight match */
  font-weight: 600;
}

/* Small native going state indicator badge */
.badge-going {
  background-color: #2dd36f; /* Official HKJC turf green color */
  color: #ffffff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  margin-left: 5px;
  display: inline-block;
}

/* Structured padding offsets for the list names */
.stewards-list p {
  padding-left: 6px;
}