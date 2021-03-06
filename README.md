# Cooka
[![Python Versions](https://img.shields.io/pypi/pyversions/hypergbm.svg)](https://pypi.org/project/hypergbm)
[![Downloads](https://pepy.tech/badge/hypergbm)](https://pepy.tech/project/hypergbm)
[![PyPI Version](https://img.shields.io/pypi/v/hypergbm.svg)](https://pypi.org/project/hypergbm)

[简体中文](README_zh_CN.md)

Cooka is a lightweight and visualization toolkit to manage datasets and design model learning experiments through web UI.
It using [DeepTables](https://github.com/DataCanvasIO/DeepTables) and [HyperGBM](https://github.com/DataCanvasIO/HyperGBM) as experiment engine to complete feature engineering, neural architecture search and hyperparameter tuning automatically.

<img src="docs/img/datacanvas_automl_toolkit.png" alt="drawing" width="700" height="450"/>

## Features overview 
Through the web UI provided by cooka you can:

- Add and analyze datasets
- Design experiment
- View experiment process and result
- Using models
- Export experiment to jupyter notebook 

Screen shots：
<table style="border: none">
    <th><img src="docs/img/cooka_home_page.png" width="500"/></th>
    <th><img src="docs/img/cooka_train.gif" width="500"/></th>
</table>

The machine learning algorithms supported are ：
- XGBoost
- LightGBM
- Catboost

The neural networks supported are：
- WideDeep
- DeepFM
- xDeepFM
- AutoInt
- DCN
- FGCNN 
- FiBiNet
- PNN
- AFM
- [...](https://deeptables.readthedocs.io/en/latest/models.html)


The search algorithms supported are：
- Evolution
- MCTS(Monte Carlo Tree Search)
- [...](https://github.com/DataCanvasIO/HyperGBM)

The supported feature engineering provided by  [scikit-learn](https://scikit-learn.org) and [featuretools](https://github.com/alteryx/featuretools) are：

- Scaler
    - StandardScaler
    - MinMaxScaler
    - RobustScaler
    - MaxAbsScaler
    - Normalizer
   
- Encoder
    - LabelEncoder
    - OneHotEncoder
    - OrdinalEncoder

- Discretizer
    - KBinsDiscretizer
    - Binarizer

- Dimension Reduction
    - PCA

- Feature derivation
    - featuretools

- Missing value filling
    - SimpleImputer 

It can also extend the search space to support more feature engineering methods and modeling algorithms.

## Installation 

### Use pip

The python version should be >= 3.6, for CentOS , install the system package:

```shell script
pip install --upgrade pip
pip install cooka
```

Start the web server：
```shell script
cooka server
```

Then open `http://<server:8140>` with your browser to use cooka.

By default, the cooka configuration file is at `~/.config/cooka/cooka.py`,  to generate a template:
```shell script
mkdir -p ~/.config/cooka/
cooka generate-config > ~/.config/cooka/cooka.py
```

### Use Docker

Launch a Cooka docker container:

```shell script
docker run -it -p 8000:8000 -p 8888:8888 -e NOTEBOOK_PORTAL="http://<external_ip>:8888"  datacanvas/cooka
```

Open `http://<external_ip:8000>` with your browser to use cooka.

See more documents：
1. [Install from source code](docs/pages/install_from_source.md)
2. [Integrate with Notebook](docs/pages/install_with_jupyter.md)

## DataCanvas

![](docs/img/dc_logo_1.png)

Cooka is an open source project created by [DataCanvas](https://www.datacanvas.com/). 


