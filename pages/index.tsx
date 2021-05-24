import Layout from "../components/Layout";
import CardWithHeadingAndBadge from "../components/UI/CardWithHeadingAndBadge";
import CardWithHeading from "../components/UI/CardWithHeading";
import StatusCard from "../components/UI/StatusCard";

export default function Home() {
  return (
    <Layout>
      <div className="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <a
          href="https://github.com/movwf"
          target="_blank"
          className="px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark"
        >
          Share
        </a>
      </div>
      <div className="mt-2">
        <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 xl:grid-cols-4">
          <StatusCard
            title="Value"
            values={[30000, 20000, 18750]}
            icon="dollar"
            format="currency-dollar"
          />
          <StatusCard
            title="Users"
            values={[30000, 45300, 50021]}
            icon="users"
            format="normal"
          />
          <StatusCard
            title="Orders"
            values={[30000, 43300, 45021]}
            icon="trending-up"
            format="normal"
          />
          <StatusCard
            title="Tickets"
            values={[2310, 19950, 20516]}
            icon="ticket"
            format="normal"
          />
        </div>

        <div className="grid grid-cols-1 p-4 space-y-8 lg:gap-8 lg:space-y-0 lg:grid-cols-4">
          <div className="col-span-2">
            <CardWithHeadingAndBadge
              title="Bar Chart"
              badgeLabel="Last Year"
              badgeInnerText="123"
            >
              <span>Test</span>
            </CardWithHeadingAndBadge>
          </div>
          <div className="col-span-2">
            <CardWithHeadingAndBadge
              title="Bar Chart"
              badgeLabel="Last Year"
              badgeInnerText="123"
            >
              <span>Test</span>
            </CardWithHeadingAndBadge>
          </div>
        </div>

        <div className="grid grid-cols-1 p-4 space-y-8 lg:gap-8 lg:space-y-0 lg:grid-cols-3">
          <div className="col-span-1 h-96">
            <CardWithHeading title="Active Users Right Now">
              <span>Test</span>
            </CardWithHeading>
          </div>
        </div>
      </div>
    </Layout>
  );
}
