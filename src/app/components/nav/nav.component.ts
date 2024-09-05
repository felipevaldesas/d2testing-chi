import { Component, AfterViewInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { map, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements AfterViewInit, OnDestroy {
    @ViewChild('sidenav') sidenav!: MatSidenav;
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(map(result => result.matches));
    private destroy$ = new Subject<void>();
    submenuVisible: boolean = false;
    activeSubmenu: string | null = null;
    opened = false;
    isSidenavOpen = false;
    submenusState: { [key: string]: boolean } = {};
    servicesSubmenus = [
        {
          title: 'Advisory & Transactions',
          link: '/servicios/asesoramiento',
          items: [
            { label: 'Office consulting', link: '/servicios/asesoramiento/oficinas' },
            { label: 'Retail consulting', link: '/servicios/asesoramiento/locales-comerciales' },
            { label: 'Industrial consulting', link: '/servicios/asesoramiento/bodegas-industriales' },
            { label: 'Land consulting', link: '/servicios/asesoramiento/suelos' },
          ],
        },
        {
          title: 'Management Services',
          link: '/servicios/gestion',
          items: [
            { label: 'Facility management', link: '/servicios/gestion/mantenimiento' },
            { label: 'Property management', link: '/servicios/gestion/propiedades' },
            { label: 'Asset management', link: '/servicios/gestion/activos' },
            { label: 'Project management', link: '/servicios/gestion/proyectos' },
          ],
        },
        {
          title: 'Consulting & Strategy',
          link: '/servicios/consultoria',
          items: [
            { label: 'Market Research', link: '/servicios/consultoria/investigacion' },
            { label: 'Capital Markets', link: '/servicios/consultoria/mercado' },
            { label: 'Corporate Services', link: '/servicios/consultoria/corporativo' },
            { label: 'Valuation & Advisory', link: '/servicios/consultoria/valuacion' },
          ],
        },
    ];

    constructor(
        private breakpointObserver: BreakpointObserver, 
        private router: Router,
        private cdr: ChangeDetectorRef
    ) {}

    ngAfterViewInit(): void {
        this.isHandset$.pipe(takeUntil(this.destroy$)).subscribe(isHandset => {
            if (!isHandset) {
                this.sidenav.mode = 'side';
                this.sidenav.open();
            } else {
                this.sidenav.mode = 'over';
                this.sidenav.close();
            }
            this.cdr.detectChanges();
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
      
    toggleSidenav(): void {
        this.isSidenavOpen = !this.isSidenavOpen; 
        this.sidenav.toggle();
        this.cdr.detectChanges();
    }   
    
    toggleSubmenu(menu: string, event: MouseEvent): void {
        event.stopPropagation(); // Prevenir la activación del enlace de la ruta
        this.submenusState[menu] = !this.submenusState[menu];
    }
    
    isMenuOpen(menu: string): boolean {
        return this.submenusState[menu];
    }

    navigateHome(): void {
        this.router.navigate(['/']);
    }

    showSubmenu(): void {
        this.submenuVisible = true;
    }
    
    hideSubmenu(): void {
        this.submenuVisible = false;
    }
}