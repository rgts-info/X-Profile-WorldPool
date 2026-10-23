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

  selectedSection: string = 'world';

  // 🚀 INTERACTIVE DRAWER ENGINE STATE CONTROLLERS
  showStep2: boolean = false;
  showStep3: boolean = false;


  constructor(private currentplatform: CurrentplatformService) {}


  // Function to switch languages
  toggleLanguage() {
    this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
  }

  shareGuide(): void {

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

  ngOnInit(): void {
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

// Accordion slide trigger methods
  toggleStep2(): void {
    this.showStep2 = !this.showStep2;
  }

  toggleStep3(): void {
    this.showStep3 = !this.showStep3;
  }

// 🍏 CORE METHOD TO VALIDATE AND TRANSMIT THE BETA EMAIL REQUEST STRING
  submitIosBeta(emailString: string): void {
    const refinedEmail = emailString ? emailString.trim() : '';
    
    // Quick regex client verification baseline check
    if (!refinedEmail || !refinedEmail.includes('@')) {
      alert(this.currentLang === 'en' 
        ? 'Please enter a valid email address.' 
        : '請輸入正確的電郵地址。'
      );
      return;
    }

    // Call service layer pipeline passing the flag anchor string indicator
    this.currentplatform.logLandingPageVisit('iOS_Beta_Join', refinedEmail).subscribe({
      next: (response) => {
        alert(this.currentLang === 'en'
          ? 'Success! Your email has been Whitelisted for the iOS TestFlight Beta.'
          : '登記成功！您的電郵已加入 iOS TestFlight 測試名額。'
        );
      },
      error: (err) => {
        console.error("Beta submission pipeline error:", err);
        alert('Network connection error. Please try again later.');
      }
    });
  }

}
