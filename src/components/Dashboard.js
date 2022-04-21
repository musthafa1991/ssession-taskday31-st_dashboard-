import React, { Fragment } from 'react'
import { Card } from './Card'

export function Dashboard() {
    return (

        <div className='ml-5 mr-5'>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>

            </div>
            <div className="row">
                <Card border="border-left-primary" icon="fa-calendar" content="Total Students" data="1000" textcolor="text-primary"></Card>
                <Card border="border-left-success" icon="fa-dollar-sign" content="Total Teachers" data="100" textcolor="text-success"></Card>
                <Card border="border-left-info" icon="fa-clipboard-list" content="Alumni" data="2000k" textcolor="text-info"></Card>
                <Card border="border-left-warning" icon="fa-comments" content="Management Data" data="" textcolor="text-warning"></Card>
            </div>
        </div>


    )
}

