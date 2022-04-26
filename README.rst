===========================
Oríon Dashboard (Prototype)
===========================

This is a very preleminary prototype of a dashboard for Oríon. Most of it are
just place-holders and static data to show visualizations.

This prototype is heavily based on 
`Carbon's React Tutorial <https://www.carbondesignsystem.com/developing/react-tutorial/overview>`_.


Installation
------------

This dashboard uses React and Carbon. You will need to install npm first, and then yarn.

.. code-block:: console

   npm install --global yarn

Install all dependencies including Carbon.

.. code-block:: console

   yarn

Run in Development Mode
-----------------------

You can start the server with 

.. code-block:: console

   yarn start

The first time will take a few minutes while everything gets compiled.

Full Build for Production
-------------------------

You can build and optimize the application with

.. code-block:: console

   yarn build

Running the Production Build
----------------------------

To run the production build of the dashboard, first install ``serve``

.. code-block:: console

   npm install -g serve

Then start the dashboard server:

.. code-block:: console

   serve -s build

From your Web browser connect to localhost:3000 .

Building Containerized Application
----------------------------------

First, do the full production build (see above). 

Use the included Dockerfile with docker/podman to build a containerized version of the Oríon Dashboard.

.. code-block:: console

   docker build -t orion-dashboard

Start the dashboard with the following command:

.. code-block:: console

   docker run -p 3000:3000 orion-dashboard

Once started, connect to the dashboard from your browser by going to localhost:3000
