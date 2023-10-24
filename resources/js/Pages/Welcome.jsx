import { Link, Head } from '@inertiajs/react';

function Recipe({ drinkers }) {
    return (
      <ol>    
        <li>Gift for attendees {drinkers} cups of water.</li>
        <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
        <li>Mandalay, KandawGyi {0.5 * drinkers} &stars; &stars;</li>
      </ol>
    );
  }  

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div>
                <section>
                    <h1>Event Name</h1>
                    <h2>Description</h2>
                    <Recipe drinkers={2} />
                    <h2>Places And Time</h2>
                    <Recipe drinkers={4} />
                    </section>
                </div>
                <div>----------------------------------</div>
                <div>
                <section>
                    <h1>Event Name</h1>
                    <h2>Description</h2>
                    <Recipe drinkers={2} />
                    <h2>Places And Time</h2>
                    <Recipe drinkers={4} />
                    </section>
                </div>
            </div>

            
        </>
    );
}
