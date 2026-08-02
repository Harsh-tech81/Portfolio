import React from 'react';
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

export const codingProfiles = [
  {
    platform: 'LeetCode',
    username: 'harsh_tech',
    url: 'https://leetcode.com/harsh_tech',
    color: '#FFA116',
    bgColor: 'rgba(255,161,22,0.1)',
    icon: <SiLeetcode />
  },
  {
    platform: 'Codeforces',
    username: 'harsh_tech',
    url: 'https://codeforces.com/profile/harsh_tech',
    color: '#1F8ACB',
    bgColor: 'rgba(31,138,203,0.1)',
    icon: <SiCodeforces />
  },
  {
    platform: 'CodeChef',
    username: 'harsh_tech',
    url: 'https://codechef.com/users/harsh_tech',
    color: '#5B4638',
    bgColor: 'rgba(91,70,56,0.1)',
    icon: <SiCodechef />
  },
  {
    platform: 'GitHub',
    username: 'Harsh-tech81',
    url: 'https://github.com/Harsh-tech81',
    color: '#333',
    bgColor: 'rgba(51,51,51,0.1)',
    icon: <FaGithub />
  },
  {
    platform: 'GeeksforGeeks',
    username: 'harsh_tech',
    url: 'https://geeksforgeeks.org/user/harsh_tech',
    color: '#2F8D46',
    bgColor: 'rgba(47,141,70,0.1)',
    icon: <SiGeeksforgeeks />
  },
  {
    platform: 'HackerRank',
    username: 'harsh_tech',
    url: 'https://hackerrank.com/harsh_tech',
    color: '#00EA64',
    bgColor: 'rgba(0,234,100,0.1)',
    icon: <SiHackerrank />
  }
];
