# Jonathan Berrisch - Personal Website

This repository hosts the personal academic website of **Jonathan Berrisch**, a Postdoctoral Researcher at the University of Duisburg-Essen and Nix(OS) enthusiast.

## Overview

The website serves as a digital portfolio and hub for Jonathan's academic and professional work. It includes:

-   **Home**: Introduction and profile.
-   **Projects**: A collection of open-source contributions, primarily R and Python packages for statistical computing and data analysis.
-   **CV**: Professional curriculum vitae.
-   **Publications**: A list of academic papers and articles.
-   **Talks**: Slides and materials from various presentations and conferences.

## Key Projects

Some of the featured open-source projects include:

-   **[rcpptimer](https://github.com/BerriJ/rcpptimer)**: An R package with a C++ header-only library for benchmarking code with OpenMP support.
-   **[profoc](https://github.com/BerriJ/profoc)**: An R package for probabilistic forecast combination.
-   **[dccpp](https://github.com/BerriJ/dccpp)**: Fast O(n log(n)) computation of distance covariance and correlation using C++.
-   **[ENTSOE-APY](https://github.com/BerriJ/entsoe-apy)**: A Python library for accessing ENTSO-E Transparency Platform data.
-   **[OnlyQR](https://onlyqr.0n8.de/)**: A simplified, SVG-only QR code generator.

## Tech Stack

-   **Frontend**: Static HTML5, CSS3, and JavaScript.
-   **Icons**: [Lucide Icons](https://lucide.dev/).
-   **Slides**: Presentations are built using [Remark.js](https://github.com/gnab/remark) (inferred from `remark-zoom.js` in assets).
-   **CV Generation**: The CV is automagically rendered using R.

## Directory Structure

-   `cv/`: Source files and scripts for generating the CV.
-   `slides/`: Directory containing standalone HTML presentations for various talks.
-   `*.html`: Core pages of the website (index, projects, publications, talks).
-   `style.css`: Main stylesheet.
-   `header.js` / `footer.js`: Shared site navigation and footer components.
