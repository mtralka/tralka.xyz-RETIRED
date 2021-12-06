---
title: MGWRVisualizer
subtitle: Novel Visualization Suite
skills:
  - Python
  - Javascript
  - HTML
  - CSS
  - Tailwind & Windi CSS
  - Netlify
  - DeckGL
links:
  - text: Deployed Site
    link: https://mgwrvisualizer.netlify.app/
    icon: gg:website
  - text: Github
    icon: ion:logo-github
    link: https://github.com/mtralka/MGWRVisualizer
slug: mgwrvisualizer
link: /projects/mgwrvisualizer
---
## Objective

Learning Multiscale Geographically Weighted Regression (MGWR) can prove difficult and unaccesible. This website + clients aim to address this problem by creating easy-to-understand interactive visualizations of MGWR properties.

[Deployed Test Site](https://mgwrvisualizer.netlify.app)

### Project Status

* Python client - ✔️

  * visualize with local server ✔️
  * save results to upload to web client ✔️
* Web client - 🟨 functional

  * pre-built datasets to visualize - ❌
  * upload dataset to visualize - ❌

### Current Features

* Spatial viz of covariate bandwith
* Spatial viz of attribute bandwith
* Dynamic chart of signifigant parameters at 95th confidence
* Model results
* Diagnostic information

Work in Progress

* viz model fit based on AIC versus bandwith

## Python Client

The Python client can do 2 main things

* Run a local `mgwrvisualizer` webclient server
* Export formatted MGWR result objects for later visualization

### Install

```python
pip install mgwrvisualizer
```

### Usage

See `examples` for full example Jupyter notebooks

#### Running local server

```python
from mgwrvisualizer import MGWRVisualizer

data_df = pd.DatFrame ...  # non-spatial dataframe
geodata_df = gpd.GeoDataFrame ...  # spatial dataframe
mgwr_results = MGWR(coords, _y, _X, mgwr_selector).fit()

viz = MGWRVisualizer(mgwr_results, data_df, geodata_df, merge_key="AreaKey")

viz.run()  # run server

>> browser opens to local server
```

#### Saving results

You can save a formatted version of the MGWR model results. You can then upload this file to the webclient for later visualization (in-progress)

```python
from mgwrvisualizer import MGWRVisualizer

data_df = pd.DatFrame ...  # non-spatial dataframe
geodata_df = gpd.GeoDataFrame ...  # spatial dataframe
mgwr_results = MGWR(coords, _y, _X, mgwr_selector).fit()

viz = MGWRVisualizer(mgwr_results, data_df, geodata_df, merge_key="AreaKey")

viz.save_results("mgwr-results-file.json") 
```