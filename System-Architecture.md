# System Architecture

## Project Title

**Streamlining IT Procurement**

## 1. Overview

The system architecture describes the main components involved in the Streamlining IT Procurement project and how they work together to manage IT procurement requests.

## 2. Main Components

### User Interface

The user interface allows employees and other authorized users to interact with the procurement system.

Users can:

* Submit procurement requests.
* View request details.
* Check request status.
* Receive updates.

### ServiceNow Platform

ServiceNow acts as the main platform for managing the procurement process.

It manages:

* Service Catalog
* Requests
* Approvals
* Workflows
* Notifications
* User roles
* Reports

### Workflow

The workflow controls the movement of a procurement request through different stages.

**Request → Review → Approval → Processing → Completion**

### Database

The system stores procurement request information and related records in the ServiceNow database.

The stored information may include:

* Request details
* User information
* Approval information
* Request status
* Assignment details
* Completion information

### Reporting

Reports provide information about procurement requests and their current status. They can be used to monitor procurement activities and request progress.

## 3. System Flow

1. User opens the procurement application.
2. User submits an IT procurement request.
3. The request is stored in ServiceNow.
4. The request is reviewed by the responsible team.
5. Approval is requested when required.
6. Approved requests are assigned for processing.
7. Procurement activities are completed.
8. The request status is updated.
9. The request is closed after completion.
10. Reports can be generated for monitoring.

## 4. Architecture Flow

**User**

↓

**ServiceNow User Interface**

↓

**Service Catalog / Procurement Request**

↓

**Workflow**

↓

**Review & Approval**

↓

**Procurement Processing**

↓

**Request Completion**

↓

**Reports**

## 5. Expected Result

The architecture provides a centralized and structured system for managing IT procurement requests from submission through completion.
