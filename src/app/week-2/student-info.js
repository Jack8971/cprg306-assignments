'use client';

import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Jackson Battista</p>
      <p>
        <Link href="https://github.com/Jack8971/cprg306-assignments" target="_blank">
          GitHub: <u>Jack8971/cprg306-assignments</u>
        </Link>
      </p>
    </div>
  );
}
