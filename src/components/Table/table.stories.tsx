import { RiLoader3Line } from "@remixicon/react"
import type { Meta, StoryObj } from "@storybook/react"

import { Badge, badgeVariants } from "../Badge/Badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "./Table"

const meta: Meta<typeof Table> = {
  title: "ui/Table",
  component: Table,
}

export default meta
type Story = StoryObj<typeof Table>

const data: Array<{
  id: number
  name: string
  sales: string
  region: string
  status: string
  deltaType: string
  hours: number
  databaseStatus: keyof typeof badgeVariants.variants.variant
}> = [
  {
    id: 1,
    name: "Peter Doe",
    sales: "1.000.000",
    region: "Region A",
    status: "overperforming",
    deltaType: "moderateIncrease",
    hours: 100,
    databaseStatus: "success",
  },
  {
    id: 2,
    name: "Jon Doe",
    sales: "2.202.000",
    region: "Region B",
    status: "overperforming",
    deltaType: "moderateIncrease",
    hours: 110,
    databaseStatus: "success",
  },
  {
    id: 3,
    name: "Peter Doe",
    sales: "1.505.000",
    region: "Region C",
    status: "underperforming",
    deltaType: "moderateDecrease",
    hours: 90,
    databaseStatus: "success",
  },
  {
    id: 4,
    name: "Employee 4",
    sales: "500000",
    region: "Region D",
    status: "overperforming",
    deltaType: "moderateDecrease",
    hours: 92,
    databaseStatus: "error",
  },
  {
    id: 5,
    name: "Employee 5",
    sales: "600000",
    region: "Region E",
    status: "underperforming",
    deltaType: "moderateDecrease",
    hours: 95,
    databaseStatus: "warning",
  },
  {
    id: 6,
    name: "Employee 6",
    sales: "700000",
    region: "Region F",
    status: "overperforming",
    deltaType: "moderateIncrease",
    hours: 98,
    databaseStatus: "warning",
  },
  {
    id: 7,
    name: "Employee 7",
    sales: "800000",
    region: "Region G",
    status: "underperforming",
    deltaType: "moderateDecrease",
    hours: 101,
    databaseStatus: "success",
  },
  {
    id: 8,
    name: "Employee 8",
    sales: "900000",
    region: "Region H",
    status: "overperforming",
    deltaType: "moderateDecrease",
    hours: 104,
    databaseStatus: "success",
  },
  {
    id: 9,
    name: "Employee 9",
    sales: "1000000",
    region: "Region I",
    status: "underperforming",
    deltaType: "moderateIncrease",
    hours: 107,
    databaseStatus: "success",
  },
  {
    id: 10,
    name: "Employee 10",
    sales: "1100000",
    region: "Region J",
    status: "overperforming",
    deltaType: "moderateDecrease",
    hours: 110,
    databaseStatus: "success",
  },
  {
    id: 11,
    name: "Employee 11",
    sales: "1200000",
    region: "Region K",
    status: "underperforming",
    deltaType: "moderateDecrease",
    hours: 113,
    databaseStatus: "success",
  },
  {
    id: 12,
    name: "Employee 12",
    sales: "1300000",
    region: "Region L",
    status: "overperforming",
    deltaType: "moderateIncrease",
    hours: 116,
    databaseStatus: "default",
  },
  {
    id: 13,
    name: "Employee 13",
    sales: "1400000",
    region: "Region M",
    status: "underperforming",
    deltaType: "moderateDecrease",
    hours: 119,
    databaseStatus: "default",
  },
]

export const Default: Story = {
  render: (args) => (
    <TableRoot data-testid="table-root">
      <Table {...args} data-testid="table">
        <TableCaption data-testid="table-caption">
          A list of your recent invoices.
        </TableCaption>
        <TableHead data-testid="table-head">
          <TableRow data-testid="table-row">
            <TableHeaderCell data-testid="table-header-cell">
              Name
            </TableHeaderCell>
            <TableHeaderCell className="text-right">Sales ($)</TableHeaderCell>
            <TableHeaderCell>Region</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Working Hours (h)
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Database Status
            </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody data-testid="table-body">
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell data-testid="table-cell">{item.name}</TableCell>
              <TableCell className="text-right">{item.sales}</TableCell>
              <TableCell>{item.region}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell className="text-right">{item.hours}</TableCell>
              <TableCell className="text-right">
                <Badge variant={item.databaseStatus} className="max-w-36">
                  {item.databaseStatus === "default" && (
                    <RiLoader3Line className="size-4 shrink-0 animate-spin" />
                  )}
                  <span className="truncate">
                    {item.databaseStatus === "default"
                      ? "Calculation Pending"
                      : null}
                    {item.databaseStatus === "warning" ? "Not validated" : null}
                    {item.databaseStatus === "error" ? "Failed" : null}
                    {item.databaseStatus === "success" ? "Completed" : null}
                  </span>
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFoot data-testid="table-foot">
          <TableRow>
            <TableHeaderCell colSpan={2} scope="row" className="text-right">
              4642
            </TableHeaderCell>
            <TableHeaderCell colSpan={3} scope="row" className="text-right">
              15h
            </TableHeaderCell>
            <TableHeaderCell colSpan={1} scope="row" className="text-right">
              n/a
            </TableHeaderCell>
          </TableRow>
        </TableFoot>
      </Table>
    </TableRoot>
  ),
}
