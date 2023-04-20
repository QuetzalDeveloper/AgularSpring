import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesJsonExternoComponent } from './clientes-json-externo.component';

describe('ClientesJsonExternoComponent', () => {
  let component: ClientesJsonExternoComponent;
  let fixture: ComponentFixture<ClientesJsonExternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesJsonExternoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesJsonExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
