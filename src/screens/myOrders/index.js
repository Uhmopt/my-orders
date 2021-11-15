import React from 'react';
import OrderCard from 'src/components/OrderCard';
import ScreenLayout from 'src/ScreenLayout/ScreenLayout';

const orderData = [
  {
    id: '2BTVG',
    date: '10 Oct, 2021',
    time: '12:37 AM',
    status: 'Processing',
    meal_title: 'Avocado Toast',
    restaurant_name: 'NU Kitchen Somerville',
    price: 14.46,
  },
  {
    id: '2BTVT',
    date: '10 Oct, 2021',
    time: '12:37 AM',
    status: 'Completed',
    meal_title: 'Avocado Toast',
    restaurant_name: 'NU Kitchen Somerville',
    price: 14.46,
  },
  {
    id: '2BTVG',
    date: '10 Oct, 2021',
    time: '12:37 AM',
    status: 'Processing',
    meal_title: 'Avocado Toast',
    restaurant_name: 'NU Kitchen Somerville',
    price: 14.46,
  },
  {
    id: '2BTVT',
    date: '10 Oct, 2021',
    time: '12:37 AM',
    status: 'Completed',
    meal_title: 'Avocado Toast',
    restaurant_name: 'NU Kitchen Somerville',
    price: 14.46,
  },
  {
    id: '2BTVG',
    date: '10 Oct, 2021',
    time: '12:37 AM',
    status: 'Processing',
    meal_title: 'Avocado Toast',
    restaurant_name: 'NU Kitchen Somerville',
    price: 14.46,
  },
  {
    id: '2BTVT',
    date: '10 Oct, 2021',
    time: '12:37 AM',
    status: 'Completed',
    meal_title: 'Avocado Toast',
    restaurant_name: 'NU Kitchen Somerville',
    price: 14.46,
  },
  {
    id: '2BTVG',
    date: '10 Oct, 2021',
    time: '12:37 AM',
    status: 'Processing',
    meal_title: 'Avocado Toast',
    restaurant_name: 'NU Kitchen Somerville',
    price: 14.46,
  },
  {
    id: '2BTVT',
    date: '10 Oct, 2021',
    time: '12:37 AM',
    status: 'Completed',
    meal_title: 'Avocado Toast',
    restaurant_name: 'NU Kitchen Somerville',
    price: 14.46,
  },
  {
    id: '2BTVG',
    date: '10 Oct, 2021',
    time: '12:37 AM',
    status: 'Processing',
    meal_title: 'Avocado Toast',
    restaurant_name: 'NU Kitchen Somerville',
    price: 14.46,
  },
  {
    id: '2BTVT',
    date: '10 Oct, 2021',
    time: '12:37 AM',
    status: 'Completed',
    meal_title: 'Avocado Toast',
    restaurant_name: 'NU Kitchen Somerville',
    price: 14.46,
  },
  {
    id: '2BTVG',
    date: '10 Oct, 2021',
    time: '12:37 AM',
    status: 'Processing',
    meal_title: 'Avocado Toast',
    restaurant_name: 'NU Kitchen Somerville',
    price: 14.46,
  },
  {
    id: '2BTVT',
    date: '10 Oct, 2021',
    time: '12:37 AM',
    status: 'Completed',
    meal_title: 'Avocado Toast',
    restaurant_name: 'NU Kitchen Somerville',
    price: 14.46,
  },
  {
    id: '2BTVG',
    date: '10 Oct, 2021',
    time: '12:37 AM',
    status: 'Processing',
    meal_title: 'Avocado Toast',
    restaurant_name: 'NU Kitchen Somerville',
    price: 14.46,
  },
  {
    id: '2BTVT',
    date: '10 Oct, 2021',
    time: '12:37 AM',
    status: 'Completed',
    meal_title: 'Avocado Toast',
    restaurant_name: 'NU Kitchen Somerville',
    price: 14.46,
  },
];

export default function MyOrders() {
  return (
    <ScreenLayout>
      {orderData.map((order, orderIndex) => (
        <OrderCard
          key={orderIndex}
          orderId={order?.id}
          date={order?.date ?? ''}
          time={order?.time ?? ''}
          status={order?.status ?? ''}
          mealTitle={order?.meal_title ?? ''}
          restaurantName={order?.restaurant_name ?? ''}
          price={order?.price ?? ''}
        />
      ))}
    </ScreenLayout>
  );
}
