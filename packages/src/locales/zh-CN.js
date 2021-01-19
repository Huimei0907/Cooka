export default {
  // 数据集列表
  'datasetlist.placeholder': '请输入名称',
  'datasetlist.new': '新建数据集',
  'datasetlist.upload': '上传本地文件',
  'datasetlist.import': '从文件系统导入',
  'datasetlist.name': '名称',
  'datasetlist.rows': '行数',
  'datasetlist.cols': '列数',
  'datasetlist.size': '大小',
  'datasetlist.time': '实验次数',
  'datasetlist.date': '日期',
  'datasetlist.option': '操作',
  'datasetlist.del': '删除',
  'datasetlist.delSucceed': '删除成功',
  'datasetlist.uploadFile': '上传文件',
  'datasetlist.systemImport': '文件系统导入',
  'datasetlist.address': '地址',
  'datasetlist.source': '数据源',
  'datasetlist.confirm': '确认删除吗？',
  'datasetlist.ok': '确认',
  'datasetlist.cancel': '取消',
  'datasetlist.nomore': '没有更多数据了',
  // 文件上传
  'upload.upload': '文件上传',
  'upload.anaysis': '抽样分析',
  'upload.col': '按行数',
  'upload.percent': '按比例',
  'upload.nCol': '抽样行数',
  'upload.nPercent': '抽样比例',
  'upload.tips': '不足1000行，将使用所有数据计算',
  'upload.uploadTips': '支持上传csv文件，至少要有2列，标签列有缺失值的行不参与训练',
  'upload.details': '了解详情',
  'upload.uploadBox': '点击或将文件拖拽到这里上传',
  'upload.name': '数据集名称',
  'upload.create': '创建',
  'upload.uploadStep': '上传文件',
  'upload.loadData': '加载数据',
  'upload.analysisData': '分析数据',
  'upload.prepare': '未开始',
  'upload.uploading': '上传中...',
  'upload.loading': '加载中...',
  'upload.analysising': '分析中...',
  'upload.fail': '加载数据失败',


  'upload.necessary': '必填',
  'upload.rule': '名称只允许包含数字',
  'upload.big': '文件太大',
  'upload.uploadFail': '上传文件失败',
  'upload.wholeData': '全量数据',

  'upload.hintUploadFile': '耗时{elapsed}s, 文件大小{fileSize}',
  'upload.hintLoadData': '耗时{elapsed}s，总共{nRows}行{nColumns}列，加载{nRowsUsed}行分析',
  'upload.hintAnalysis': '耗时{elapsed}s，连续型共{nContinuous}列，类别型{nCategorical}列，时间型{nDatetime}列',
  'upload.hintWholeData': '使用全量数据分析将消耗较长时间，适合数据量不大时使用',


  // 本地导入
  'import.import': '本地导入',
  'import.copy': '复制文件',
  'import.fail': '分析失败',
  'import.address': '文件地址',
  'import.analysis': '分析',

  // 数据预览
  'preview.viewOriginFile': '您可以查看原始文件来检查数据集是否正确读取',
  'preview.view': '去查看',

  // 数据探查
  'explore.name': '列名',
  'explore.type': '特征类型',
  'explore.missing': '缺失值百分比',
  'explore.diff': '不同值',
  'explore.correlation': '与目标相关性',
  'explore.num': '数字',
  'explore.category': '类别',
  'explore.date': '日期',
  'explore.text': '文本',
  'explore.placeholder': '查找特征',
  'explore.max': '最大值',
  'explore.min': '最小值',
  'explore.medium': '中位数',
  'explore.mean': '均值',
  'explore.std': '标准差',
  'explore.usual': '最常见',
  'explore.cols': '列',
  'explore.dataType': '数据类型',
  'explore.goTrain': '去训练',
  'explore.labelCol': '目标',
  'explore.histogram': '直方图',
  'explore.pie': '饼图',
  'explore.tooMuchMissing': '超过70%数据缺失',
  'explore.stableFeature': '超过90%数据相同',
  'explore.idNess': 'ID列，不同值的个数几乎与行数相同',
  'explore.hintType': 'str类型推断为类别类型特征，int和float类型推断为连续型特征，yyyy-MM-dd HH:mm:ss 格式的字符串推断为日期型',
  'explore.hintDataType': 'Pandas中的数据类型',
  'explore.hintMissing': '此列中缺失值所占的百分比, {samplingInfo}',
  'explore.row': '行',
  'explore.hintUniques': '此列中不同值的数量, {samplingInfo}',
  'explore.hintSampling': '抽样{samplingData}计算',
  'explore.hintNoSampling': '全量数据计算',
  'explore.hintCorrelation': '使用皮尔逊相关性系数计算得到，值的区间为[-1, 1]，绝对值越大相关性越强。正负表示正相关或者负相关，通常相关性较高的特征可能存在目标泄漏\n',
  'center.hintConfusionMatrix': '混淆矩阵是一个表，表中的每一行代表一个预测类别，每一列代表一个观察类别。矩阵中的单元格指出每个分类预测与每个观察标签相一致的频率。此矩阵有助您确定最常出现的误分类情形，例如，哪些类别经常会与其他类别混淆。',


  // 模型训练
  'train.basicOpt': '基础选项',
  'train.tagCol': '目标列',
  'train.normalSampleModal': '正样本',
  'train.trainMode': '训练模式',
  'train.experimentEngine': '实验引擎',
  'train.quick': '快速',
  'train.performance': '性能',
  'train.minimal': '最小模式*',
  'train.advancedOpt': '高级选项',
  'train.dataAllot': '数据拆分',
  'train.crossVerified': '交叉验证',
  'train.divisionNum': '分割数',
  'train.testUnionPercentage': '测试集比例',
  'train.cvdata': 'CV数据',
  'train.testUnion': '测试集',
  'train.datetimeCol': '日期列',
  'train.select': '请选择',
  'train.datetimeColSelectorNoItem': '无日期列',
  'train.train': '训练',
  'train.taskType': '任务类型',
  'train.labelNotEmpty': '标签列不能为空',
  'train.posNotEmpty': '正样本不能为空',
  'train.taskMultiClassification': '多分类',
  'train.taskBinaryClassification': '二分类',
  'train.taskRegression': '回归',
  'train.hintInferTaskType': '将创建{taskType}任务',
  'train.hintTaskType': '如果该列只有两个不同值推断成二分类，如果目标列类型为float则推断为回归，其他类型推断为多分类，超过1000个类别暂不支持',
  'train.hintTrainMode': '性能模式比快速模式将使用更大的参数空间和更多的迭代次数，通常模型的效果也应更好，但是会消耗更多时间',
  'train.hintDatetimeSeriesFeature': '用于按照时间顺序对数据进行拆分，如果您的数据按时间有序，并且模型要预测将来出现的值，该选项有助于提高模型预测能力',
  'train.hintTarget': '选择一个目标列来进行训练',
  'train.hintPositiveLabel': '正样本帮助正确评估模型',
  'train.hintExperimentEngine': '训练模型以及处理特征的方式',

  // 模型中心 Elapsed
  'center.trainingPanelTitle': '第{noExperiment}次训练',
  'center.modal': '实验序号',
  'center.target': '指标',
  'center.process': '优化进度',
  'center.remain': '预计剩余时间',
  'center.spend': '耗时',
  'center.size': '大小',
  'center.log': '日志',
  'center.source': '源码',
  'center.finished': '已结束',
  'center.evaluate': '评估结果',
  'center.predict': '批量预测',
  'center.param': '超参数',
  'center.mix': '混淆矩阵',
  'center.actual': '实际',
  'center.modalEvaluate': '模型评估指标',
  'center.roc': 'ROC曲线',
  'center.uploadBox': '点击或将文件拖至到这里上传',
  'center.uploadtips': '支持上传csv文件，最大128MB',
  'center.uploadData': '上传数据',
  'center.loadData': '加载数据',
  'center.read': '读取模型',
  'center.predictData': '预测数据',
  'center.evaluate.predict': '预测',
  'center.result': '写出结果',
  'center.upload': '上传文件',
  'center.readed': '读取到',
  'center.rows': '行',
  'center.cols': '列',
  'center.modalSize': '模型目录大小',
  'center.download': '下载结果',
  'center.training': '模型正在训练中，请稍后查看',
  'center.fail': '模型训练失败，',
  'center.bug': '查看日志',
  'center.success': '文件上传成功',
  'center.big': '文件太大',
  'center.failUpload': '文件上传失败',
  'center.hintNotebook': '训练源码导出成Notebook，需在配置文件中正确配置c.CookaApp.notebook_portal选项',
  'center.hintSourceCode': '训练模型所使用的源码',
  'center.hintModelSize': '模型文件的总大小，模型训练成功后显示。',
  'center.hintElapsed': '已经消耗的时间',
  'center.hintRemainingTime': '预估剩余时间，通过已经完成的参数搜索消耗的时间来评估模型训练剩余的时间，至少有一次成功的搜索才能评估剩余时间',
  'center.hintProgress': '参数搜索进度，已经搜索次数/预计搜索次数，默认使用早停法，当模型预测能力无法提高时候会提前停止训练',
  'center.hintOptimizeMetric': '最后一次搜索模型的得分',
  'center.titleNotebook': 'Notebook',
  'center.titleResource': '资源',
  'center.hintResource': '您可以查看进行实验的源码、日志和由源码导出成Notebook，查看Notebook需在配置文件中正确配置c.CookaApp.notebook_portal选项',
  'center.hintLog': '模型训练日志',
  'center.hintEarlyStopping': '由于模型性能无法提升，提前停止训练',
  'center.titleEngine': '引擎',
  'center.hintTargetCol': '目标列是{targetCol}',

  'center.batchPredict.processTip.upload': '文件大小{fileSize}，耗时{took}s',
  'center.batchPredict.processTip.loadData': '读取到{nRows}行{nCols}列，耗时{took}s',
  'center.batchPredict.processTip.loadModel': '模型大小{modelSize}，耗时{took}s',
  'center.batchPredict.processTip.evaluate': '耗时{took}s',
  'center.batchPredict.processTip.writeResult': '下载预测结果',

  // extra stuff
  'extra.dataset': '数据集',
  'extra.new': '新增数据集',
  'extra.name': '数据集名称',
  'extra.create': '创建',
  'extra.explore': '探索',
  'extra.preview': '数据预览',
  'extra.dataExplore': '数据探查',
  'extra.train': '实验设计',
  'extra.center': '实验列表',
  // 'extra.doc': '操作文档',
  'extra.doc': ' ', // DataCanvas AutoML Toolkit
  'extra.testAndTrain': '验证集-训练集-测试集',
  'extra.verifyUnion': '验证集',
  'extra.trainUnion': '训练集',
  'extra.testUnion': '测试集',
  'extra.inputName': '请输入数据集名称',
  'extra.rule': '名称只允许包含数字、字母和下划线',

}
