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

    /*
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
    */

    // 🚀 EXPANDED BACKEND ROUTINE METHOD PIPELINE WITH REFINED ARGS
    logLandingPageVisit(pv_Action_Flag: string, pv_User_Email: string = ''): Observable<any> {

        console.log("IN service check pv_User_Email= ", pv_User_Email);
        return this.http.post('https://' + this.serverAddress + '/api/logLandingPageVisit_X_Profile.php', {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            action_flag: pv_Action_Flag,
            device_type: this._currentPlatform,
            // Pass the email string token safely down to the MariaDB capture point
            email_address: pv_User_Email 
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
