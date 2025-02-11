import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.getBreadcrumbs(this.route.root);
      });
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    if (!route.routeConfig || !route.routeConfig.path) return breadcrumbs;

    const newUrl = `${url}/${route.routeConfig.path}`;
    const label = route.routeConfig.data?.['breadcrumb'] || route.routeConfig.path;

    const breadcrumb: Breadcrumb = { label, url: newUrl };
    const updatedBreadcrumbs = [...breadcrumbs, breadcrumb];

    return route.firstChild ? this.getBreadcrumbs(route.firstChild, newUrl, updatedBreadcrumbs) : updatedBreadcrumbs;
  }
}