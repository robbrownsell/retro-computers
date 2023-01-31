import {Directive, ElementRef, HostBinding, Input} from "@angular/core";

@Directive(
  {
    selector:'[activeTab]'
  }
)
export class ActiveTabDirective {

  @Input() currentTab: String | undefined;
  @Input() activeComponent: String | undefined;

  @HostBinding('class')
  elementClass = ""

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    if(this.currentTab == this.activeComponent) {
      this.elementClass = "active"
    }
  }

}
