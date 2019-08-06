# The solution description

## Introduction

The solution in the diagram above might seem like there is a lot going on. However; considering all of the on premise infrastructure already running. Looking at the architecture diagram above these are all the items in grey. They include among other, the server, the external drive where backups reside at the moment, as well as the firewall and internet gateway. Mostly these are the infrastructure items on the left.

>I hope I had made a fair assumption here, these are usually minimally, the items at play in the normal operation of business. Note I did not consider infrastructure that is irrelevant to the requirement, unless there is something I am unaware of. 

## What is a hybrid cloud?

Merely a term that references a situation where any physical infrastructure or desktop software is integrated with cloud infrastructure or software. The technical term for cloud computing resources, meaning anything that will resemble a tangible part of any business network in the physical space, is usually referred to as HaaS (Hardware as a service) and when scaled up to a corporate level is known as IaaS (Infrastructure as a service). It is named like this , as a service, because it is not something you can acquire, you can only lease it. There is also Software as a Service and Plantform as a Service.

## The general layout

As I am sure you have noticed that the left side is your office productivity network, the right side is the cloud environment which will also be covered in this document. And in the middle is the public transport layer that the data must traverse to get to reach the cloud, travelling on the public internet over [http](http) is how most web traffic is transported, in modern times where people in general are more aware of security, https has rather become the preferred manner of moving data around the web as this is a protocol that is asymmetrically encrypted with 2 security keys, a public and a private key and is exactly the method of transport that our solution will use. If you would like to know more on asymmetric encryption please see [this link](TODO:)

## The components

### On premise

>I will not dive into the components that you see in your office everyday. 

The one item, you are probably wondering about, is the if whether you have a firewall. Corporate grade firewalls are usually devices on their own but these days any machine running windows will have a firewall as well as your internet gateway or wifi-router has a industry standard firewall out of the box and to save cost we will make use of these to make sure that your data up until the point where it enters the internet mainstream will remain secure. 

The only 2 components that will most probably not be installed on your network are the AWS Storage Gateway and the private encryption key:

![Onsite new resources](https://em-proposal-assets.now.sh/public/png/onsitenew-recources.png) {style="text-align:center"}

The **AWS storage gateway** is as the the name suggest, the software service that must be installed in the office server, this is what will allow the local network to connect to the cloud network or virtual private network (next sections will elaborate more on this). 

The **encryption key** is the private encryption key that will be used to encrypt the data before sending it to the cloud backup storage. 
 


