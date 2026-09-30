# UI Policy Documentation

## Project Title

**Streamlining IT Procurement**

## 1. Overview

UI Policies in ServiceNow are used to dynamically control the behavior and appearance of form fields based on specific conditions.

In the Streamlining IT Procurement project, UI Policies can be used to make the procurement request form easier to use and ensure that users provide the required information.

## 2. Purpose

The main purposes of UI Policies are:

* Make fields mandatory when required.
* Make fields visible based on conditions.
* Make fields read-only when necessary.
* Improve the user experience.
* Reduce incorrect or incomplete form submissions.
* Display relevant fields based on the selected request information.

## 3. Procurement Request Form

The procurement request form can contain fields such as:

* Requester
* Request Type
* IT Product or Service
* Description
* Quantity
* Business Justification
* Priority
* Approval Status
* Additional Information

## 4. Example UI Policies

### UI Policy 1 – Request Type

**Condition:** Request Type is selected.

**Action:**

* Display fields related to the selected request type.
* Make relevant fields available for the user.

### UI Policy 2 – Business Justification

**Condition:** Procurement request requires justification.

**Action:**

* Make the Business Justification field mandatory.

### UI Policy 3 – Additional Information

**Condition:** User selects a specific IT product or service.

**Action:**

* Display the Additional Information field.
* Allow the user to provide more details about the requirement.

### UI Policy 4 – Approval Status

**Condition:** Request has entered the approval stage.

**Action:**

* Make approval-related information read-only for normal users.

## 5. UI Policy Actions

UI Policy Actions can be used to control individual fields.

The available actions include:

* Mandatory
* Visible
* Read-only

These actions are applied automatically when the defined UI Policy condition is satisfied.

## 6. Expected Result

The UI Policies help create a more organized procurement request form. Relevant fields can be displayed when needed, required information can be enforced, and fields can be protected from unnecessary changes.

## 7. Benefits

* Improves form usability.
* Reduces incomplete requests.
* Ensures required information is provided.
* Controls field visibility.
* Protects important information from unwanted changes.
* Provides a consistent user experience.

## 8. Conclusion

UI Policies are an important part of the Streamlining IT Procurement project because they help control the behavior of procurement forms dynamically. They support better data collection and make the ServiceNow procurement process more user-friendly.
