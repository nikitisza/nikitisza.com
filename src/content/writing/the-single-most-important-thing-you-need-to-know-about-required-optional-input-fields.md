---
title: "The Single Most Important Thing You Need To Know About Required & Optional Input Fields"
summary: "How to improve form's UX design"
listed: true
order: 140
---

### **Required or optional labels**

Which one should we use for good user experience design in form fields?

‍

**Required labels** let us know which fields are mandatory in a form.

‍

However, when required labels or required form fields outnumber the optional form fields, it can create visual clutter.

‍

When we look at these two options, Option 2 and Option 3, we can tell which one is busier visually.

<figure><div><img alt="" src="/images/writing/the-single-most-important-thing-you-need-to-know-about-required-optional-input-fields/6289eeb69076f34ad08f0d79_1-fzyrae7gpk9dbhcsxlq3tq.png"></div><figcaption>Example of using required and optional labels — image design is by Niki Tisza</figcaption></figure>

If we only label the **optional fields**, it takes the opposite approach and tells us which fields are not mandatory and which fields are not required.

### Options for form input field design

#### **Option 1**

One approach is when we have all mandatory fields marked with an asterisk.

<figure><div><img alt="Form design example using mandatory fields" src="/images/writing/the-single-most-important-thing-you-need-to-know-about-required-optional-input-fields/6289eeb69e24d03846f4402d_1-gmd81d2jjisp9-2ilx3m3w.png"></div><figcaption>Form design example using the asterisk as the indicator of mandatory fields — image by Niki Tisza</figcaption></figure>

#### Option 2

This approach also focuses on the required fields by marking the mandatory ones, but we remove the instruction line.

<figure><div><img alt="Form design example using mandatory field labels — image by Niki Tisza" src="/images/writing/the-single-most-important-thing-you-need-to-know-about-required-optional-input-fields/6289eeb61948ad7fb0b3010c_1-3yocn1_w62bmeyitek4rea.png"></div><figcaption>Form design example using the mandatory field labels — image by Niki Tisza</figcaption></figure>

#### Option 3

In this last option, we mark only the optional fields.

<figure><div><img alt="Form design example labelling only the optional input fields — image by Niki Tisza" src="/images/writing/the-single-most-important-thing-you-need-to-know-about-required-optional-input-fields/6289eeb67e2bdca436ad6908_1-ukob7osr8qwfp-lzqkhttq.png"></div><figcaption>Form design example labelling only the optional input fields — image by Niki Tisza</figcaption></figure>

### So, which approach should we take?

The answer is my favourite answer: **it depends**.

‍

It really depends on the form.

‍

For example, if we have a form where all fields are required, then instead of marking each of them with an asterisk, maybe this is something that you could do.

<figure><div><img alt="2 Examples of marking mandatory fields — design created by Niki Tisza" src="/images/writing/the-single-most-important-thing-you-need-to-know-about-required-optional-input-fields/6289eeb6ede950de800f833a_1-u10u46grn2hqreincumr-q.png"></div><figcaption>Examples of marking mandatory fields — design created by Niki Tisza</figcaption></figure>

We can say '<em>all fields are required'</em> on the top of the form, and by adding this line, we remove the visual clutter of all of the asterisks.

‍

<strong>One more thing to keep in mind when using an asterisk..</strong>.

‍

You must have seen a lot of forms on the internet using a red colour on asterisks. But don't follow that design.

‍

I'd instead recommend using a different colour because we should keep the red colour for error messages. Choose something very distinct from red and different from your brand colour scheme.

Here I'm using a teal colour:

<figure><div><img alt="Examples of using red and teal colour on asterisk — design created by Niki Tisza" src="/images/writing/the-single-most-important-thing-you-need-to-know-about-required-optional-input-fields/6289eeb617f8bbd7e04242b1_1-rprkgimdjk-wam5te5h5vq.png"></div><figcaption>Examples of using red and teal colour on asterisk — design created by Niki Tisza</figcaption></figure>

‍

### What does the research say?

NN Group recommends [marking required fields in forms](https://www.nngroup.com/articles/required-fields/).

They suggest using an asterisk to mark required fields because it's an easy way to improve the form's usability.

‍

Only marking optional fields makes it difficult for people to fill out a form.

‍

Looking at our three options, based on NN Group's suggestion, they would recommend **against** Option 3. So they would either suggest Option 1 or Option 2.

<figure><div><img alt="" src="/images/writing/the-single-most-important-thing-you-need-to-know-about-required-optional-input-fields/6289eeb638db6512890b2d8a_1-xtgx09fxjtrfxk2fswhdlg.png"></div><figcaption>Form UX design options — design created by Niki Tisza</figcaption></figure>

‍

### Accessibility of the input fields

The form's usability wouldn't be complete without including the accessibility of a form.

‍

What [Deque says about accessible forms](https://www.deque.com/blog/anatomy-of-accessible-forms-required-form-fields/):

-   We need to indicate which fields are required by adding 'required' text to the label
-   We should also provide a star or asterisk symbol (this is the visual indication of the mandatory form fields)
-   We need to use colour to identify if a form control is required
-   When it comes to developing the form, we also need to provide an HTML 5 and Aria attribute that tells which fields are required.

‍

### You might wonder now…but what's the right approach?

The correct answer is still, well, it depends.

‍

It depends on the form. It depends on the product.

‍

For example, if we look at the [Picsart](https://apps.apple.com/us/app/picsart-photo-video-editor/id587366035) app and its registration flow & how they present the input field without labelling any of them:

<figure><div><img alt="" src="/images/writing/the-single-most-important-thing-you-need-to-know-about-required-optional-input-fields/6289eeb6ef00fabfaea0d7e0_1-_qurpzyjkyv-jcecskvw6g.png"></div></figure>

This is a **perfect example of breaking the rules** and UX best practices because they have a good reason.

‍

In the Picsart registration flow, all of these fields, e.g. email address, first name, last name, and username, are presented separately on the screen. One input field, one screen, and one call to action button.

‍

You can get away without labelling the input fields with mandatory and optional text if you do something like that.

‍

Because it's easy to understand for users that if they see one input field on the screen, they need to fill it in to go to the next screen.

‍

#### What I usually do

If it is a larger form with more input fields, and I can't break it down into chunks, I prefer Option 1. Option 1 is my go-to version, and you can't go wrong with that.

‍

#### Removing optional fields

[Another discussion suggests](https://ux.stackexchange.com/questions/9684/how-to-represent-optional-fields) that if an input field is optional, why do we even display it on the screen if we don't do anything with it? If it doesn't provide value to the customer, why do we ask for it?

So, this is just another thing to consider & think about when you add an optional field to a screen.

‍

Let's ask ourselves, is it *essential*? You might want to remove the optional fields if they are not mandatory.

‍

If the company doesn't do anything with the data, why do we even ask for information like that?

‍

### Take away

When designing a form, always consider the user's experience & always ask yourself whether an input field is required or optional.

-   If an input field is required, make sure it's clearly marked and easily identifiable
-   If an input field is optional, make sure it's clear that it's not required
-   Use clear labels and instructions for all input fields.

‍

This article is the written version of my YouTube video, check it out if that’s your thing 😊

<figure style="padding-bottom:33.723653395784545%" class="w-richtext-align-normal w-richtext-figure-type-video"><div><iframe src="https://www.youtube.com/embed/mvIaUHr2i5U" title="The Single Most Important Thing You Need To Know About Required &amp; Optional Input Fields Form UX" scrolling="no" frameborder="0" allowfullscreen="true"></iframe></div></figure>
