import * as React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import logo from '/logo.webp';
import { Ambulance, ArrowRight, ChartLine, Mail, MapPin, Waypoints } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full max-w-7xl mx-auto px-6 py-3">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className=" w-auto" />
      </div>

      {/* Navigation Items */}
      <NavigationMenu.Root className="relative z-10">
        <NavigationMenu.List className="flex items-center space-x-2">
          {/* Home Link */}
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="px-4 py-2 text-sm font-medium  hover:text-gray-900 hover:bg-gray-100 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              href="/">
              Home
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          {/* About Link */}
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              href="/about">
              About
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          {/* Service Dropdown */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Service <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>

            <NavigationMenu.Content className=" top-full left-0 mt-2 data-[motion=from-start]:animate-in data-[motion=from-end]:animate-in data-[motion=to-start]:animate-out data-[motion=to-end]:animate-out">
              <ul className="grid gap-3 p-6 w-[600px] grid-cols-[0.75fr_1fr] bg-white rounded-lg shadow-xl border border-gray-200">
                {/* Featured Card */}
                <li className="row-span-3">
                  <NavigationMenu.Link asChild>
                    <a
                      className="flex flex-col justify-end h-full w-full rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 p-6 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      href="/">
                      <img src={logo} alt="logo"  className='' />
                      <div className="text-white text-lg font-bold mb-2">
                        Our Services
                      </div>
                      <p className="text-blue-100 text-sm leading-relaxed">
                        Professional transportation solutions for your needs.
                      </p>
                    </a>
                  </NavigationMenu.Link>
                </li>

                <li>
                  <div className="flex gap-6 items-center">
                    <Ambulance size={40} />
                    <ListItem href="/logistics" title="Fleet management">
                      Comprehensive fleet tracking and management solutions
                    </ListItem>
                  </div>

                  <div className="flex items-center gap-6">
                    <Waypoints />
                    <ListItem href="/freight" title="Route Optimization">
                      optimize delivery routes fo.r maximum efficiency
                    </ListItem>
                  </div>
                  <div className="flex gap-6 items-center">
                    {' '}
                    <MapPin />
                    <ListItem href="/warehousing" title="Real-time Tracker">
                      Track your vehicles in real time
                    </ListItem>
                  </div>

                  <div className="flex items-center gap-6">
                    <ChartLine />
                    <ListItem href="/warehousing" title="Analytics Dashboard">
                      Comprehensive analytics and reporting
                    </ListItem>
                  </div>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* Contact Link */}
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              href="/contact">
              Contact
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-3">
        <Button variant="outline" className="hover:bg-gray-100">
          Contact Us
          <Mail />
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Get Started <ArrowRight />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

// ListItem Component
const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={`block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-gray-50 hover:shadow-md focus:bg-gray-50 focus:shadow-md ${
            className || ''
          }`}
          {...props}
          ref={forwardedRef}>
          <div className="text-sm font-semibold text-gray-900 leading-none mb-1">
            {title}
          </div>
          <p className="text-sm leading-snug text-gray-600 line-clamp-2">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);
