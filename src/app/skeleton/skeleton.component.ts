import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SkeletonDirection = 'row' | 'column';

export interface SkeletonItem {
  width?: string; // "50%" | "100px" | "auto"
  height?: string; // "16px"
  radius?: string; // "6px"
  circle?: boolean;

  // group properties
  direction?: SkeletonDirection;
  gap?: string;
  align?: string;
  justify?: string;
  wrap?: boolean;

  children?: SkeletonItem[];
}

export interface SkeletonRow {
  colGap?: string;
  rowGap?: string;
  align?: string;
  wrap?: boolean;
  justify?: string;
  items: SkeletonItem[];
}

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent {
  @Input() layout: SkeletonRow[] = [];

  @Input() speed: string = '1.3s';

  // Default values
  @Input() defaultColGap: string = '12px';
  @Input() defaultRowGap: string = '20px';
  @Input() defaultChildGap: string = '10px';

  isGroup(item: SkeletonItem): boolean {
    return !!item.children && item.children.length > 0;
  }

  getRowStyle(row: SkeletonRow) {
    return {
      display: 'flex',
      gap: row.colGap || this.defaultColGap,
      alignItems: row.align || 'flex-start',
      justifyContent: row.justify || 'flex-start',
      flexWrap: row.wrap === false ? 'nowrap' : 'wrap',
      width: '100%',
    };
  }

  getRowGap(row: SkeletonRow): string {
    return row.rowGap || this.defaultRowGap;
  }

  getGroupStyle(item: SkeletonItem) {
    return {
      display: 'flex',
      flexDirection: item.direction || 'row',
      gap: item.gap || this.defaultChildGap,
      alignItems: item.align || 'center',
      justifyContent: item.justify || 'flex-start',
      flexWrap: item.wrap === false ? 'nowrap' : 'wrap',
      width: item.width || 'auto',
    };
  }

  getItemStyle(item: SkeletonItem) {
    const width = item.width || '100%';

    return {
      width: width,
      height: item.height || '16px',
      borderRadius: item.circle ? '50%' : item.radius || '6px',

      // ✅ FIX percentage width inside flex
      flex: width === 'auto' ? '0 0 auto' : `0 0 ${width}`,
      flexBasis: width,

      '--speed': this.speed,
    };
  }
}
