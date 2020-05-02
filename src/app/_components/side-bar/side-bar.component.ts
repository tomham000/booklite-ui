import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";

@Component({
    selector: 'side-bar',
    styleUrls: ['./side-bar.component.scss'],
    templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements AfterViewInit{

    @ViewChild('sideMenu', {static: false}) public sideMenu: ElementRef;

    public isNavMenuVisible: boolean = false;

    ngAfterViewInit(): void {
    // Stop menu animations during window resize
    let resizeTimer;
    window.addEventListener("resize", () => {
      this.sideMenu.nativeElement.classList.add("stop-transitions");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.sideMenu.nativeElement.classList.remove("stop-transitions");
      }, 100);
    });
    }


    public openNavMenu(): void {
        this.isNavMenuVisible = true;
        this.sideMenu.nativeElement.focus();
    }

    public closeNavMenu(): void {
        this.isNavMenuVisible = false;
    }

    public toggleNavMenu(): void {
        this.isNavMenuVisible = !this.isNavMenuVisible;
    }

    public clickOutsideNavMenu(): void {
        if (this.isNavMenuVisible) {
            this.isNavMenuVisible = false;
        }
    }
}