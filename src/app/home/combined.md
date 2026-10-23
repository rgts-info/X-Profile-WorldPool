//START: HTML
<!-- 🏆 The primary layout root shell for your app -->
<div class="bulletin-app-layout">

  <!-- START: @if (selectedSection === 'world') -->
  @if (selectedSection === 'world') {
    <div class="rgts-data-container animate-fade-in">

      <!-- 🚀 STAGE A: THE PREMIUM HERO INSTALLATION CONVERSION FUNNEL -->
      <div class="news-bulletin-wrapper stream-hero-container">
        <div class="stream-hero-header-accent">🎯 Complete Step 1 in 60-Second (That's)</div>
        <div class="stream-hero-body">
          <h2>Just Follow The Money...</h2>
        </div>
      </div>

      <!-- 📊 STAGE B: THE INTERACTIVE STREAMER FILTER GUIDE ENGINE -->
      <div class="data-block-header">How to Filter World Pool Streamers</div>

      <!-- STEP 1 CARD: ALWAYS VISIBLE CORE STRATEGY -->
      <div class="news-bulletin-wrapper step-card-base style-step1-border">
        <div class="step-badge badge-step1">Step 1: The Base Core Streamers</div>
        <div class="step-card-inner">
          <h3>Compare 2 Time-Slots for 2 Regions: Overseas and Hong Kong</h3>
          <p>Identify market-supported runners by filtering horses whose Parade Ring odds are strictly lower than their Overnight baseline prices.</p>
          <p>Overseas here means the best odds (highest payout) from approximately 15 different global bookmakers'</p>

          <!-- Horizontal Image Scroller Block -->
          <!-- Use Oct 3, 2026 R3 Flemington as data sample --> 
          <div class="horizontal-scroll-viewport">
            <div class="scroll-flex-track">
              <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P1: Main</span><img src="assets/img/X-Profile-1-1080-2424.webp" class="scroller-img-asset" loading="lazy" /></div>
              <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P2: Select Race</span><img src="assets/img/X-Profile-2-1080-2424.webp" class="scroller-img-asset" loading="lazy" /></div>
              <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P3: Odds Page</span><img src="assets/img/X-Profile-3-1080-2424.webp" class="scroller-img-asset" loading="lazy" /></div>
              <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P4: Streamers</span><img src="assets/img/X-Profile-4-1080-2424.webp" class="scroller-img-asset" loading="lazy" /></div>
              <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P5: Dividend</span><img src="assets/img/X-Profile-5-1080-2424.webp" class="scroller-img-asset" loading="lazy" /></div>
              <!-- <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P17: Shortlist</span><img src="assets/img/RGTS-QS-WP-SH-17-1080-2640.webp" class="scroller-img-asset" loading="lazy" /></div>
              <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P18: Vulnerable Fav</span><img src="assets/img/RGTS-QS-WP-SH-18-1080-2640.webp" class="scroller-img-asset" loading="lazy" /></div> -->
            </div>
          </div>

          <!-- Punchy operational breakdown copy strings -->
          <div class="data-explanation-box">
            <p>🔹 <strong>Easy UI navigation:</strong> From Main (P1) Press Live Play Button -> From Select Race (P2) Press Odds Button.</p>
            <p>🔹 <strong>Identify the target grid:</strong> Press the "Win Trend" button. Then scroll right and locate "Overseas (Pa.Ring)" and "Overseas (Overnight)" fields (P3).</p>
            <p style="margin-top: 8px;">🔹 <strong>Spot Streamers:</strong> Look for runners whose price drops inside the paddock window. In this sample race, horses 3, 6, 8, 10, and 15 cleared this criteria cleanly (P4).</p>
            <p style="margin-top: 8px;">🔹 <strong>Dividend:</strong> This sample race results: 15, 6, 3, 11 (P5) and three out of five filtered streamers finished the top three positons.</p>
          </div>
        </div>
      </div>

      <!-- STEP 2 INTERACTIVE TOGGLE CONTAINER BUTTON -->
      <button class="interactive-drawer-toggle-btn" (click)="toggleStep2()">
        <span>🔍 Step 2: Advanced Tips Cross-Filter (Optional)</span>
        <span class="toggle-icon">{{ showStep2 ? '▲ Hide' : '▼ Expand' }}</span>
      </button>

      <!-- STEP 2 DRAWER CONTAINER VIEW PANEL -->
      @if (showStep2) {
        <div class="news-bulletin-wrapper step-card-base style-step2-border drawer-animation">
          <div class="step-card-inner">
            <h3>Isolate Hidden Streamers Using Public Consensus Overlooks</h3>
            <p>Uncover premium value by cross-referencing your Step 1 shortlist against public form handicapper sheets to track runners flying entirely under the public radar.</p>

            <div class="horizontal-scroll-viewport">
              <div class="scroll-flex-track">
                <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P24: Shortlist Audit</span><img src="assets/img/RGTS-QS-WP-SH-24-1080-2640.webp" class="scroller-img-asset" loading="lazy" /></div>
                <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P25: Raceday Tips</span><img src="assets/img/RGTS-QS-WP-SH-25-1080-2640.webp" class="scroller-img-asset" loading="lazy" /></div>
                <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P26: Hidden Value</span><img src="assets/img/RGTS-QS-WP-SH-26-1080-2640.webp" class="scroller-img-asset" loading="lazy" /></div>
              </div>
            </div>

            <div class="data-explanation-box">
              <p>🔸 <strong>Extract consensus form:</strong> Tap "Tips of Raceday" (P25) to isolate the horses that standard public public money is stacked on (runners 2, 4, 7, 9, 10, 12).</p>
              <p style="margin-top: 8px;">🔸 <strong>Filter out public bias:</strong> Match your Step 1 selections against their sheet and remove public elements. This uncovers pure <strong>Hidden Streamers: 5, 11, 13, 15, and 16</strong>.</p>
              <p style="margin-top: 8px;">🏆 <strong>The Payout Result:</strong> Insiders knew the favorite was weak on yielding turf. Hidden Streamer **HN 13** won smoothly paying a massive **$110.00 Win dividend**, while **HN 15** ran 3rd to spark a huge **$132.00 Swinger (Quinella Place)** combo (P26)!</p>
            </div>
          </div>
        </div>
      }

      <!-- STEP 3 INTERACTIVE TOGGLE CONTAINER BUTTON -->
      <button class="interactive-drawer-toggle-btn" style="margin-top: 15px;" (click)="toggleStep3()">
        <span>🟢 Step 3: Live Color-Drop Indicators (Optional)</span>
        <span class="toggle-icon">{{ showStep3 ? '▲ Hide' : '▼ Expand' }}</span>
      </button>

      <!-- STEP 3 DRAWER CONTAINER VIEW PANEL -->
      @if (showStep3) {
        <div class="news-bulletin-wrapper step-card-base style-step3-border drawer-animation">
          <div class="step-card-inner">
            <h3>Track Final Minute Fluctuations via the 40% Max Rule</h3>
            <p>Monitor real-time pool variances inside the final 3-minute window and secure structural mathematical advantages using macro sequence caps.</p>

            <div class="horizontal-scroll-viewport">
              <div class="scroll-flex-track">
                <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P29: Dividend Core</span><img src="assets/img/RGTS-QS-WP-SH-29-1080-2640.webp" class="scroller-img-asset" loading="lazy" /></div>
                <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P30: Result Sheet</span><img src="assets/img/RGTS-QS-WP-SH-30-1080-2640.webp" class="scroller-img-asset" loading="lazy" /></div>
                <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P31: Race 2 Green</span><img src="assets/img/RGTS-QS-WP-SH-31-1080-2640.webp" class="scroller-img-asset" loading="lazy" /></div>
                <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P38: Live Odds Board</span><img src="assets/img/RGTS-QS-WP-SH-38-1080-2640.webp" class="scroller-img-asset" loading="lazy" /></div>
                <div class="scroll-data-card portrait-row-card"><span class="image-inner-label">P39: $105 Payout Strike</span><img src="assets/img/RGTS-QS-WP-SH-39-1080-2640.webp" class="scroller-img-asset" loading="lazy" /></div>
              </div>
            </div>

            <div class="data-explanation-box">
              <p>🟢 <strong>Green Color Indicators:</strong> Confirms a heavy live pool variance drop of **20% or more** inside the final 60 seconds (P31). Brown signals a 50%+ crash.</p>
              <p style="margin-top: 8px;">📈 <strong>The 40% Probability Ceiling:</strong> Five years of macro historical analysis proves that an average of **only 40% of races per card** will opening up successful live indicator hits. On an 8-race card, that means the physical ceiling is exactly **3 successful races**.</p>
              <p style="margin-top: 8px;">⚡ <strong>Live Execution Strike:</strong> If you reach Race 7 and the day's successful counter is lagging at only 2 hits, the probability of the next green horse running into the frame becomes astronomical. Horse 9 lit up green in the final minute (P38) and won comfortably to return a massive **$105.00 Win dividend** (P39)! Once the day hits 3 clicks, stop playing and protect your wallet.</p>
            </div>
          </div>
        </div>  
      }

      <div class="news-bulletin-wrapper stream-hero-container">
        <div class="stream-hero-body">
          <!-- Zero Friction App Downloads links -->
          <div class="app-download-grid">
            <a href="https://google.com" target="_blank" class="native-store-btn play-store-theme" (click)="download_click()">🤖 Play Store</a>
            <a href="https://apple.com" target="_blank" class="native-store-btn testflight-theme" (click)="download_click()">🍏 TestFlight Beta</a>
          </div>
          <div class="free-badge-notice">✓ 100% Free App — No Subscription Required</div>
        </div>
      </div>

      <!-- 流動端分享掣 -->
      <!-- <div *ngIf="running_on_mobile_boolean" 
        style="text-align: center; margin-top: 20px; padding-top: 15px; border-top: 1px dashed #eee;">
        <ion-button (click)="shareGuide()" shape="round" style="--background: #0288d1; --color: white; font-weight: bold; --box-shadow: 0 2px 4px rgba(0,0,0,0.15);">
          <ion-icon slot="start" name="share-social-outline"></ion-icon>
          <span>分享此教學至電腦觀看</span>
        </ion-button>
      </div> -->

    </div>
  }

</div>
//END: HTML

//Start: ts file
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CurrentplatformService } from '../providers/currentplatform.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit{

  // Set 'en' (English) as the default language for X profile
  // currentLang: 'zh' | 'en' = 'zh';
  currentLang: string = 'en';

  running_on_mobile_boolean: boolean = true;

  selectedSection: string = 'hk'; 

  constructor(private currentplatform: CurrentplatformService) {}


  // Function to switch languages
  toggleLanguage() {
    this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
  }

  shareGuide() {

    const shareData = {
      title: 'RGTS Quick Start Guide',
      text: 'Use odds data to perform smart horse screening and race analysis.',
      url: 'https://rgts-hk.com/quickstart/'
    };

    // Check if native Web Share API is available in the current browser
    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback: Copy link automatically if system share sheet is blocked
      navigator.clipboard.writeText(shareData.url).then(() => {
        alert(this.currentLang === 'en' 
          ? 'Link copied to clipboard! You can paste and send it to your desktop.' 
          : '網址已複製到剪貼簿！你可以直接貼上並傳送至電腦開。'
        );
      }).catch(err => {
        // Hard fallback display text if clipboard permissions fail
        alert(`URL: ${shareData.url}`);
      });
    }
  }

  ngOnInit() {
    this.currentplatform.logLandingPageVisit('Open').subscribe({
      next: t => console.log("Visit logged:", t),
      error: t => {
        console.error("Log failed:", t);
        if (t.error) console.error("Server response:", t.error);
        if (t.status) console.error("HTTP status:", t.status);
      }
    });
  }

  download_click(): void{
    this.currentplatform.logLandingPageVisit('Download').subscribe({
      next: t => console.log("Visit logged:", t),
      error: t => {
        console.error("Log failed:", t);
        if (t.error) console.error("Server response:", t.error);
        if (t.status) console.error("HTTP status:", t.status);
      }
    });

  }



}
//END: ts file

//START: service ts file: 
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout, take, map } from 'rxjs/operators';

type CurrentPlatformType =
  | 'browser'
  | 'ios'
  | 'android';

@Injectable({
  providedIn: 'root'
})

export class CurrentplatformService {

    private serverAddress = 'app.rgts-hk.com';
    private _currentPlatform!: CurrentPlatformType;

    constructor(private platform: Platform, private http: HttpClient)
    {
        this.setCurrentPlatform();
    }

    logLandingPageVisit(pv_Action_Flag: string): Observable<any> {

        return this.http.post('https://' + this.serverAddress + '/api/logLandingPageVisit_X_Profile.php', {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        action_flag: pv_Action_Flag,
        device_type: this._currentPlatform
        }).pipe(
        timeout(6000),
        take(1),
        map(res => res)
        );
    }
    
    /*
        private setCurrentPlatform(): void {
            // Are we on mobile platform? Yes if platform is ios or android, but not desktop or mobileweb, no otherwise
            if (this.platform.is('ios') || this.platform.is('android') && 
                !( this.platform.is('desktop') || this.platform.is('mobileweb')))
            {
                this._currentPlatform = 'mobile';
            } else {
                this._currentPlatform = 'browser';
            }
        }

        private setCurrentPlatform(): void {
            this._currentPlatform =
                this.platform.is('mobile')
                    ? 'mobile'
                    : 'browser';
        }

    */

    private setCurrentPlatform(): void {

        if (this.platform.is('ios')) {
            this._currentPlatform = 'ios';
        }
        else if (this.platform.is('android')) {
            this._currentPlatform = 'android';
        }
        else {
            this._currentPlatform = 'browser';
        }
    }


    get currentPlatform() {
        return this._currentPlatform;
    }

}
//END: service ts file

//START: CSS file

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

  /*
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
  */

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
  border-radius: 12px;
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

  overflow: scroll; //Added: 09262026

}

.bulletin-header-container {
  max-width: 480px;          
  margin: 20px auto 0 auto;  // Kept bottom margin flush
  padding: 0 16px;
  box-sizing: border-box;
  width: 100%;
}

/*
  .news-bulletin-wrapper {
    background-color: #1a1e24; 
    border-radius: 12px;
    margin: 15px auto 25px auto; // 15px gap tightly follows your tab bars
    max-width: 480px;          
    box-sizing: border-box;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35); 
    overflow: auto; 
  }
*/

/* ==========================================================================
   🏅 UPDATED CARD WRAPPER ENGINE (STRETCHES NATIVELY DOWN THE PAGE)
   ========================================================================== */
.news-bulletin-wrapper {
  background-color: #1a1e24; 
  border-radius: 12px;
  margin: 15px auto 25px auto; 
  max-width: 480px;          
  box-sizing: border-box;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35); 
  
  /* 🛠️ THE CRITICAL CHANGE: Stops cards from compressing and creating dual nested scrollbars */
  // overflow: hidden !important; REMARK: 09232026
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
  // padding: 10px 40px;          // 👈 Added side-padding padding buffers for zoom headrooms
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



//NEW CSS 10232026

/* ==========================================================================
   🏇 PREMIUM STREAMER FILTER LANDING ENGINE STYLES
   ========================================================================== */
.stream-hero-container {
  background: radial-gradient(circle at top, #1f2833 0%, #161a1e 100%) !important;
  border: 1.5px solid #ffdf00 !important; /* Premium Gold border bounding box */
  text-align: center;
  margin-top: 15px !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45) !important;
}

.stream-hero-header-accent {
  background-color: #ffdf00;
  color: #1a1e24;
  font-weight: 800;
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 6px 0;
  border-radius: 8px;
}

.stream-hero-body {
  padding: 24px 16px;

  h2 {
    font-size: 26px;
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 8px 0;
    letter-spacing: 0.5px;
  }
}

.stream-hero-intro {
  font-size: 14.5px !important;
  line-height: 1.6 !important;
  color: #cbd5e1 !important;
  margin-bottom: 20px;
}

/* Formula Telemetry Display Box */
.formula-display-box {
  background-color: #0b0c10;
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 14px;
  margin-bottom: 18px;
  text-align: left;
}

.formula-title {
  color: #66fcf1; /* Electric Cyan accent */
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.formula-line {
  font-size: 13.5px;
  color: #e2e8f0;
  margin: 4px 0;
  line-height: 1.5;
  
  strong { color: #ffffff; }
}

.formula-footer-remark {
  font-size: 11.5px;
  color: #94a3b8;
  margin-top: 8px;
  border-top: 1px solid rgba(255,255,255,0.05);
  padding-top: 6px;
  font-style: italic;
}

/* Payout Highlights Pill */
.mini-receipt-pill {
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #ffdf00;
  font-size: 13px;
  padding: 8px 12px;
  border-radius: 6px;
  margin-bottom: 24px;
  line-height: 1.5;
}

/* App Download Layout Elements */
.app-download-grid {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
}

.native-store-btn {
  flex: 1;
  text-decoration: none !important;
  font-weight: 700;
  font-size: 13.5px;
  padding: 14px 0;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  transition: transform 0.15s ease;

  &:active {
    transform: scale(0.97);
  }
}

.play-store-theme {
  background-color: #27ae60;
  color: #ffffff !important;
}

.testflight-theme {
  background-color: #ffffff;
  color: #161a1e !important;
}

.free-badge-notice {
  font-size: 12px;
  color: #94a3b8;
  margin-top: 12px;
  font-weight: 500;
}



/* ==========================================================================
   🚀 ACCORDION DRAWERS & ACCENT THEME RULES
   ========================================================================== */
.step-card-base {
  background-color: #1a1e24 !important;
  margin-top: 10px !important;
  margin-bottom: 15px !important;
}

.style-step1-border { border: 1px solid #ffdf00 !important; } /* Gold */
.style-step2-border { border: 1px solid #45a29e !important; } /* Soft Teal */
.style-step3-border { border: 1px solid #2dd36f !important; } /* Green */

.step-card-inner {
  padding: 16px 20px;
  text-align: left;
  
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 6px 0;
  }
  p {
    font-size: 13.5px;
    line-height: 1.5;
    color: #cbd5e1;
    margin: 0 0 16px 0;
  }
}

.step-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 4px 12px;
  //border-radius: 0 0 8px 0;
  border-radius: 12px;
}
.badge-step1 { background-color: #ffdf00; color: #1a1e24; }

/* Interactive Toggle Layout Accordion Buttons */
.interactive-drawer-toggle-btn {
  width: 100%;
  max-width: 480px;
  background-color: #111418;
  color: #ffffff;
  border: 1px solid #334155;
  padding: 14px 16px;
  font-size: 14.5px;
  font-weight: 700;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: all 0.2s ease;
  outline: none;

  &:active {
    background-color: #1a1e24;
    transform: scale(0.99);
  }
}

.toggle-icon {
  font-size: 12px;
  color: #66fcf1;
  background: rgba(102, 252, 241, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
}

/* Fluid entrance layout keys */
.drawer-animation {
  animation: slideDown 0.25s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}






//END: CSS file
