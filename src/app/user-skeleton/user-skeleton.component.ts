import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface SkeletonLine {
  width: number;
  height?: number;
}

export interface SkeletonButton {
  width: number;
  height?: number;
}

export interface SkeletonCircle {
  size: number;
}

export type AlignX = 'left' | 'center' | 'right';
export type AlignY = 'top' | 'center' | 'bottom';

export type SkeletonSection =
  | {
      type: 'circle';
      width?: number;
      circle: SkeletonCircle;
      align?: AlignX;
    }
  | {
      type: 'lines';
      width?: number;
      lines: SkeletonLine[];
      gap?: number; // inside gap
      align?: AlignX;
    }
  | {
      type: 'buttons';
      width?: number;
      buttons: SkeletonButton[];
      gap?: number; // inside gap
      align?: AlignX;
    };

export interface SkeletonRowConfig {
  sections: SkeletonSection[];
  gap?: number; // row gap (between columns)
  alignY?: AlignY; // row vertical alignment
}

@Component({
  selector: 'app-user-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-skeleton.component.html',
  styleUrls: ['./user-skeleton.component.scss'],
})
export class UserSkeletonComponent {
  // wrapper gaps
  @Input() rowGap: number = 18;

  // default row gap if not provided
  @Input() defaultRowGap: number = 12;

  // default inside section gap
  @Input() defaultSectionGap: number = 8;

  @Input() backgroundColor: string = '#EAEAEA';
  @Input() foregroundColor: string = '#FFFFFF';
  @Input() speed: number = 1.5;

  @Input() rows: SkeletonRowConfig[] = [
    {
      gap: 14,
      alignY: 'top',
      sections: [
        { type: 'circle', width: 12, circle: { size: 45 }, align: 'center' },

        {
          type: 'lines',
          width: 40,
          gap: 50,
          align: 'center',
          lines: [
            { width: 90, height: 14 },
            { width: 70, height: 12 },
            { width: 60, height: 12 },
          ],
        },

        {
          type: 'lines',
          width: 25,
          gap: 30,
          align: 'center',
          lines: [
            { width: 100, height: 12 },
            { width: 80, height: 12 },
          ],
        },

        {
          type: 'buttons',
          width: 23,
          gap: 20,
          align: 'center',
          buttons: [
            { width: 100, height: 30 },
            { width: 80, height: 30 },
          ],
        },
      ],
    },
  ];

  getSectionWidth(section: SkeletonSection): number {
    return section.width ?? 100;
  }

  getRowGap(row: SkeletonRowConfig): number {
    return row.gap ?? this.defaultRowGap;
  }

  getSectionGap(section: SkeletonSection): number {
    if (section.type === 'circle') return 0;
    return section.gap ?? this.defaultSectionGap;
  }

  getAlignX(section: SkeletonSection): string {
    const align = section.align ?? 'left';
    return `align-x-${align}`;
  }

  getAlignY(row: SkeletonRowConfig): string {
    const align = row.alignY ?? 'top';
    return `align-y-${align}`;
  }
}
