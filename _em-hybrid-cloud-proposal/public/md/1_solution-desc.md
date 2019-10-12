# The solution description

## Introduction

This document describes the solution requested for cloud backup system. The system will be automated on a interval at which these backups occur has not restriction and can follow any schedule. The solution will scale as capacity requires.

> As what exactly you have on premise is not known to me, these are usually minimally the items at play in the normal operation of business. Note I did not consider infrastructure that is irrelevant to the requirement, unless there is something I am unaware of.

## What is a hybrid cloud?

Merely a term that references a situation where any physical infrastructure or desktop software is integrated with cloud infrastructure or software. The technical term for cloud computing resources, meaning anything that will resemble a tangible part of any business network in the physical space, is usually referred to as HaaS (Hardware as a service) and when scaled up to a corporate level is known as IaaS (Infrastructure as a service). It is provided as a service, because it is not something you can acquire, you can only lease it. There is also Software as a Service and Platform as a Service.

## The general layout

As I am sure you have noticed that the left side is your office productivity network and the right side is the cloud environment which will also be covered in this document. In the middle is the public transport layer that the data must traverse to get to reach the cloud, travelling on the public internet over [http](https://www.webopedia.com/TERM/H/HTTP.html) is how most web traffic is transported. In modern times where people in general are more aware of security, https has rather become the preferred manner of moving data around the web as this is a protocol that is asymmetrically encrypted with two security keys, a public and a private key and is exactly the method of transport that our solution will use. If you would like to know more on asymmetric encryption please see [this link](https://searchsecurity.techtarget.com/definition/asymmetric-cryptography)

## The components

### On premise

> The components that you see in your office everyday, will not be discussed in detail.

The one item, you are probably wondering about, is whether you have a firewall. Corporate grade firewalls are usually devices on their own but currently any machine running windows will have a firewall as well as your internet gateway or wifi-router has a industry standard firewall out of the box. To save cost we will make use of these to make sure that your data, up until the point where it enters the internet mainstream, will remain secure. 

The only two components that will most probably not be installed on your network are the AWS Storage Gateway and the private encryption key:

![Onsite new resources](https://em-proposal-assets.now.sh/public/png/onsitenew-recources.png) {style="text-align:center"}

The **AWS storage gateway**, is as the the name suggest, the software service that must be installed in the office server. This component will allow the local network to connect to the cloud network or **virtual private cloud** (next sections will elaborate more on this).

The **encryption key** is the private encryption key that will be used to encrypt the data in preparation for sending it to the cloud backup storage. 
 


