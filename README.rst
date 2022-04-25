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

   npm insall --global yarn

Install all dependencies including Carbon.

.. code-block:: console

   yarn

Host
----

You can start the server with 

.. code-block:: console

   yarn start

The first time will take a few minutes while everything gets compiled. Next time will be faster.

Building Containerized Application
----------------------------------

Use the included Dockerfile with docker/podman to build a containerized version of the Oríon Dashboard.

.. code-block:: console

   docker build -t orion-dashboard

Start the dashboard with the following command:

.. code-block:: console

   docker run -p 3000:3000 orion-dashboard

Once started, connect to the dashboard from your browser by going to localhost:3000
