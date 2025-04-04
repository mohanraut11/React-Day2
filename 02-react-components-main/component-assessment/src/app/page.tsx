// pages/page.tsx
import UserDashboard from '../app/components/UserDashboard';
import { User } from '../app/types/types';

const initialUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    role: 'Admin',
    department: 'IT',
    location: 'New York',
    joinDate: '2020-01-15',
    isActive: true,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    role: 'Editor',
    department: 'Content',
    location: 'Los Angeles',
    joinDate: '2021-03-20',
    isActive: true,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    role: 'Viewer',
    department: 'Marketing',
    location: 'Chicago',
    joinDate: '2019-11-05',
    isActive: false,
  },
  {
    id: 4,
    name: 'Sara Williams',
    email: 'sara@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    role: 'Editor',
    department: 'Design',
    location: 'Seattle',
    joinDate: '2022-05-10',
    isActive: true,
  },
  {
    id: 5,
    name: 'Mike Brown',
    email: 'mike@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    role: 'Viewer',
    department: 'Sales',
    location: 'Boston',
    joinDate: '2021-08-15',
    isActive: false,
  }
];

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-r from-blue-100 via-blue-50 to-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='frosted-glass p-6 mb-8'>
          <h1 className='text-3xl font-bold text-gray-800 text-center'>
            User Management Dashboard
          </h1>
          <p className='text-gray-600 mt-2 text-center'>
            Creating CRUD operations....
          </p>
        </div>

        <div className='frosted-glass p-6'>
          <UserDashboard initialUsers={initialUsers} />
        </div>
      </div>
    </main>
  );
}
