import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { TazoComponent } from './tazo/tazo.component';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'pokedex';

  @ViewChild("pokemonBoard", { read: ViewContainerRef }) pboard: any;

  size: number = 0;

  start:number = 1;

  constructor() { }

  ngAfterViewInit(): void {
    const renderCompontents = () => {
      this.pboard.clear();
      this.size = Math.floor((window.innerWidth - 110) / 140);
      Array.from({ length: ((this.start+this.size) <= 1280)?this.size:(1280 - this.start)}, (v, i) => {
          return i + this.start;
      }).forEach(e => {
        let Current_mini = this.pboard.createComponent(TazoComponent);
        Current_mini.instance.code = e;
        Current_mini.changeDetectorRef.detectChanges();
      });
    }
 
    document.getElementById("next_bt")?.addEventListener("click", () => {
      this.start = ((this.start + this.size) > 1280)?this.start:this.start + this.size;
      renderCompontents();
    });
 
    document.getElementById("back_bt")?.addEventListener("click", () => {
      this.start = this.start - this.size;
      if(this.start < 1) this.start = 1;
      renderCompontents();
    });
 
    window.addEventListener("resize", () => {
      renderCompontents();
    });

    renderCompontents();
  }
}