import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Api} from '../../service/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminhome',
  imports: [CommonModule],
  templateUrl: './adminhome.html',
  styleUrl: './adminhome.css'
})
export class Adminhome {

  adminName: string = '';
  error: string | null = null;

  constructor(private api: Api, private router: Router) {}

  ngOnInit(): void {
    this.fetchAdminName();
  }

  // Fetch the admin's profile name
  fetchAdminName(): void {
    this.api.myProfile().subscribe({
      next: (resp: any) => {
        this.adminName = resp.user.firstName;
      },
      error: (error) => {
        this.error = error.message;
        console.error('Error fetching admin name:', error);
      },
    });
  }

  // Navigate to Manage Rooms
  navigateToManageRooms(): void {
    this.router.navigate(['/admin/manage-rooms']);
  }

  // Navigate to Manage Bookings
  navigateToManageBookings(): void {
    this.router.navigate(['/admin/manage-bookings']);
  }

}
