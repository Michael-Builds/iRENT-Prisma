
"use client"


export const navigation = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About us",
    href: "/about",
  },
  {
    id: 3,
    name: "Contact us",
    href: "/contact",
  },
  {
    id: 4,
    name: "Blog",
    href: "/blog",
  },
]

export const contactInfo = [
  {
    id: 1,
    title: "Address",
    desc: "Ho, CK Road",
  },
  {
    id: 2,
    title: "Phone",
    desc: "+233 555 99 2084",
  },
  {
    id: 3,
    title: "Email",
    desc: "irentservices@gmail.com",
  },
]

export const importantLink = [
  {
    id: 1,
    title: "WHMCS-bridge",
  },
  {
    id: 2,
    title: "Search Domain",
  },
  {
    id: 3,
    title: "My Account",
  },
  {
    id: 4,
    title: "Reservations",
  },
]

export function getCurrentYear() {
  return new Date().getFullYear()
}
