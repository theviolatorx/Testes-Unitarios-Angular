import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list Investiments', ()=>{
    let investiments = component.investiments;
    expect(investiments.length).toBe(12);
    expect(investiments[0].name).toContain('Brasil');
    expect(investiments[4].name).toContain('Itaú');
  });
  
  it('(I) should list investiments',()=>{
    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');
    
    expect(investiments.length).toBe(12);
    expect(investiments[7].textContent).toContain('Safra');
    expect(investiments[7].textContent).not.toContain('PagSeguro');
    expect(investiments[10].textContent.trim()).toEqual("Citibank | 105"); 
  
  });
});
