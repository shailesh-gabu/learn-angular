import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SkeletonComponent, SkeletonRow } from './skeleton/skeleton.component';
import { UserSkeletonComponent } from './user-skeleton/user-skeleton.component';

@Component({
  selector: 'app-root',
  imports: [SkeletonComponent, UserSkeletonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLoading = true;

  layout: SkeletonRow[] = [
    {
      colGap: '10px',
      rowGap: '10px',
      wrap: false,
      align: 'flex-start',
      justify: 'center',

      items: [
        // Col 1 = Circle
        { width: '100px', height: '100px', circle: true },

        // Col 2 = Inside 2 rows
        {
          direction: 'column',
          gap: '10px',
          width: '100%',
          wrap: true,
          children: [
            {
              direction: 'row',
              wrap: false,
              gap: '10px',
              children: [
                { width: '50px', height: '50px' },
                { width: '50px', height: '50px' },
                { width: '50px', height: '50px' },
                { width: '50px', height: '50px' },
              ],
            },
            { width: '50%', height: '18px' },
            { width: '100%', height: '14px' },
          ],
        },

        // Col 3
        {
          direction: 'column',
          gap: '10px',
          width: '100%',
          children: [
            { width: '100%', height: '18px' },
            { width: '100%', height: '14px' },
          ],
        },
      ],
    },

    // Row 2
    {
      colGap: '15px',
      rowGap: '1px',
      items: [
        { width: '100%', height: '30px' },
        { width: '100%', height: '60px' },
      ],
    },
  ];
  //only accept string
  title: string = 'learn-angular';

  //only accept number
  count: number = 10;

  //string and number both accept
  data: string | number = 'dummy data';

  //only accept boolean
  isValid: boolean = true;

  //accept any data
  storeData: any = '';

  onClick() {
    alert('button clicked');
  }
}
