import { redirect } from 'next/navigation';
import { SessionUser } from '../session_info/session_info';
import { cookies } from 'next/headers';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export default function Session_auth_admin() {
  const cookieStore = cookies();
  const role = cookieStore.get('role')!.value;

  if (typeof role === 'string' && role == 'admin') {
    return <div></div>;
  } else {
    return redirect('/menu');
  }
}
