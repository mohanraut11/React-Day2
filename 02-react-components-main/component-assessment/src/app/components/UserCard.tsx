import React from 'react';
import { User } from '../types/types';
import Image from 'next/image';

interface UserCardProps {
  user: User;
  onViewProfile: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onViewProfile }) => {
  return (
    <div className="relative bg-light-blue-100 dark:bg-blue-900 shadow-lg rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl dark:hover:shadow-blue-700 w-full">
      {/* User Info Section */}
      <div className="flex items-center gap-6">
        <Image
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          width={80}
          height={80}
          className="rounded-full object-cover border-4 border-gray-300 dark:border-gray-600"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">{user.name}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{user.email}</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            {user.role} • {user.department}
          </p>
        </div>

        {/* Status Badge */}
        <div className="flex items-center">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              user.isActive
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {user.isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-4 flex justify-start">
        <button
          onClick={() => onViewProfile(user.id)}
          className="px-5 py-2.5 bg-orange-600 dark:bg-orange-500 text-white font-medium rounded-lg shadow-md hover:bg-orange-700 dark:hover:bg-orange-600 transition-all"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
