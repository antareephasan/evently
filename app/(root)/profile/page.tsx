import Collection from "@/components/shared/Collection"
import { Button } from "@/components/ui/button"
import { getEventsByUser } from "@/lib/actions/event.actions"
import { auth } from "@clerk/nextjs"
import Link from "next/link"

const ProfilePage = async () => {
    const { sessionClaims } = auth();

    const userId = sessionClaims?.userId as string;

    const organizedEvents = await getEventsByUser({ userId, page:1 });


    return (
        <>
            {/* My Tcikets */}
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
                <div className="wrapper flex items-center justify-center sm:justify-between">
                    <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
                    <Button asChild size="lg" className="button hidden sm:flex">
                        <Link href="/#events">
                            Explore More Events
                        </Link>
                    </Button>

                </div>
            </section>

            {/* <section className="wrapper my-8">
                <Collection
                    data={}
                    emptyTitle="No event tickets purchased yet"
                    emptyStateSubtitle="No worries - plenty of exiciting events to explore!"
                    collectionType="My_Tickets"
                    limits={3}
                    page={1}
                    urlParamName="ordersPage"
                    totalPages={2}
                />
            </section> */}

            {/* My Events */}
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
                <div className="wrapper flex items-center justify-center sm:justify-between">
                    <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
                    <Button asChild size="lg" className="button hidden sm:flex">
                        <Link href="/events/create">
                            Create New Event
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="wrapper my-8">
                <Collection
                    data={organizedEvents?.data}
                    emptyTitle="No events have been created yet"
                    emptyStateSubtitle="Go create some now"
                    collectionType="Events_Organized"
                    limits={6}
                    page={1}
                    urlParamName="eventsPage"
                    totalPages={2}
                />
            </section>
        </>
    )
}

export default ProfilePage