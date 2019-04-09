
Ext.define('CULINARIA.view.Viewport', {
    extend: 'Ext.container.Viewport',
    xtype: 'view-viewport-desktop',

    layout: { type: 'border', padding: 4 },
    style: { backgroundColor: '#60A3DD' },

    initComponent: function() {
        var me = this;
        me.items = [{
            region: 'north',
            xtype: 'tabpanel',
            activeTab: 1,
            id: 'north-tabpanel',
            border: false,
            defaults: {
                bodyPadding: 5,
                border: false
            },
            items: [{
                title: '<b>Nomencladores</b>', id: 'nomencladores-tab',
                icon: 'resources/images/nomencladores.png',
                items: [{
                    xtype: 'panel', id: 'nomencladores-tab-panel',
                    border: false,
                    collapsible: true,
                    titleCollapse: true,
                    tools: [{
                        type: 'close',
                        handler: function(){CULINARIA.View.remove();CULINARIA.View.setTitlePanel('nomencladores-tab-panel','');CULINARIA.View.expandPanel('nomencladores-tab-panel',this);}
                    }],
                    items: [{
                        xtype: 'toolbar',
                        items: [{
                            xtype: 'buttongroup',
                            title: 'Curso',
                            padding: 5,
                            items: [{
                                text: 'Costo',
                                id: 'viewport-costo-items',
                                iconCls: 'fa fa-usd',
                                iconAlign: 'top'
                            },{
                                text: 'Especialidad',
                                id: 'viewport-especialidad-items',
                                iconCls: 'fa fa-tags',
                                iconAlign: 'top'
                            },{
                                text: 'Semestre',
                                id: 'viewport-semestre-items',
                                iconCls: 'fa fa-calendar',
                                iconAlign: 'top'
                            },{
                                text: 'Tipo',
                                id: 'viewport-curso-tipo-items',
                                iconCls: 'fa fa-tag',
                                iconAlign: 'top'
                            }]
                        },{
                            xtype: 'buttongroup',
                            title: 'Organismos y Personas',
                            padding: 5,
                            items: [{
                                text: 'Organismo',
                                id: 'viewport-organismo-items',
                                iconCls: 'fa fa-bank',
                                iconAlign: 'top'
                            },{
                                text: 'Nivel (E)',
                                id: 'viewport-nivel-items',
                                iconCls: 'fa fa-line-chart',
                                iconAlign: 'top'
                            },{
                                text: 'Tipo',
                                id: 'viewport-tipo-items',
                                iconCls: 'fa fa-child',
                                iconAlign: 'top'
                            },{
                                text: 'Persona',
                                id: 'viewport-persona-items',
                                iconCls: 'fa fa-male',
                                iconAlign: 'top'
                            },{
                                text: 'Profesión',
                                id: 'viewport-profesion-items',
                                iconCls: 'fa fa-tree',
                                iconAlign: 'top'
                            }]
                        },{
                            xtype: 'buttongroup',
                            title: 'Otros',
                            padding: 5,
                            items: [{
                                iconCls: 'otros-menu',
                                iconAlign: 'top',
                                scale: 'large',
                                height: 55,
                                menu: [{
                                    text: 'Cuota',
                                    id: 'viewport-cuota-items',
                                    iconCls: 'fa fa-money',
                                    iconAlign: 'top'
                                },{
                                    text: 'Servicios (T)',
                                    id: 'viewport-servicios-tecnicos-items',
                                    iconCls: 'fa fa-cutlery',
                                    iconAlign: 'top'
                                },{
                                    text: 'Instalación',
                                    id: 'viewport-instalacion-items',
                                    iconCls: 'fa fa-birthday-cake',
                                    iconAlign: 'top'
                                }]
                            }]
                        }]
                    }]
                }]
            },{
                title: '<b>Curso (Matrícula)</b>', id: 'matricula-tab',
                icon: 'resources/images/matricula.png',
                items: [{
                    xtype: 'panel',
                    id: 'matricula-tab-panel',
                    border: false,
                    collapsible: true,
                    titleCollapse: true,
                    tools: [{
                        type: 'close',
                        handler: function(){CULINARIA.View.remove();CULINARIA.View.setTitlePanel('matricula-tab-panel', '');CULINARIA.View.expandPanel('matricula-tab-panel', this);}
                    }],
                    items: [{
                        xtype: 'toolbar',
                        items: [{
                            xtype: 'buttongroup',
                            title: 'Cursos y Matrículas',
                            padding: 5,
                            items: [{
                                text: 'Curso',
                                id: 'viewport-curso-items',
                                iconCls: 'fa fa-life-buoy',
                                iconAlign: 'top'
                            },{
                                text: 'Matrícula',
                                id: 'viewport-matricula-items',
                                iconCls: 'fa fa-tty',
                                iconAlign: 'top'
                            },{
                                xtype: 'tbspacer', width: 5
                            }]
                        },'->',{
                            xtype: 'buttongroup',
                            title: 'Sistema',
                            padding: 5,
                            items: [{
                                text: 'Ayuda',
                                tooltip: 'Ayuda general.',
                                iconCls: 'fa fa-question',
                                iconAlign: 'top',
                                id: 'help1'
                            }, {
                                text: 'Salir',
                                tooltip: 'Salir del sistema. (Logout)',
                                iconCls: 'fa fa-power-off',
                                iconAlign: 'top'
                            }]
                        }]
                    }]
                }]
            },{
                title: '<b>Asociados y Servicios Técnicos</b>',
                id: 'asociados-servicios-tecnicos-tab',
                icon: 'resources/images/asociados-servicios_tecnicos.png',
                items: [{
                    xtype: 'panel',
                    id: 'asociados-servicios-tecnicos-tab-panel',
                    border: false,
                    collapsible: true,
                    titleCollapse: true,
                    tools: [{
                        type: 'close',
                        handler: function(){CULINARIA.View.remove();CULINARIA.View.setTitlePanel('asociados-servicios-tecnicos-tab-panel', '');CULINARIA.View.expandPanel('asociados-servicios-tecnicos-tab-panel', this);}
                    }],
                    items: [{
                        xtype: 'toolbar',
                        items: [{
                            xtype: 'buttongroup',
                            title: 'Asociados y Servicios Técnicos',
                            padding: 5,
                            items: [{
                                text: 'Asociados',
                                id: 'viewport-asociados-items',
                                iconCls: 'fa fa-street-view',
                                iconAlign: 'top'
                            },{
                                text: 'Pago',
                                id: 'viewport-pago-items',
                                iconCls: 'fa fa-money',
                                iconAlign: 'top'
                            },{
                                text: 'Servicios Técnicos',
                                id: 'viewport-asociados-servicios-tecnicos-items',
                                tooltip: 'Servicios Técnicos.',
                                iconCls: 'fa fa-cutlery',
                                iconAlign: 'top'
                            },{
                                xtype: 'tbspacer', width: 5
                            }]
                        },'->',{
                            xtype: 'buttongroup',
                            title: 'Sistema',
                            padding: 5,
                            items: [{
                                text: 'Ayuda',
                                tooltip: 'Ayuda general.',
                                iconCls: 'fa fa-question',
                                iconAlign: 'top',
                                id: 'help2'
                            }, {
                                text: 'Salir',
                                tooltip: 'Salir del sistema. (Logout)',
                                iconCls: 'fa fa-power-off',
                                iconAlign: 'top'
                            }]
                        }]
                    }]
                }]
            },{
                title: '<b>Reportes</b>', id: 'reportes-tab',
                icon: 'resources/images/pdf.png',
                items: [{
                    xtype: 'panel', id: 'reportes-tab-panel',
                    border: false,
                    collapsible: true,
                    titleCollapse: true,
                    tools: [{
                        type: 'close',
                        handler: function(){CULINARIA.View.remove();CULINARIA.View.setTitlePanel('reportes-tab-panel', '');CULINARIA.View.expandPanel('reportes-tab-panel', this);}
                    }],
                    items: [{
                        xtype: 'toolbar',
                        items: [{
                            xtype: 'buttongroup',
                            title: 'PDF',
                            padding: 5,
                            items: [{
                                text: 'MODELO 1-A',
                                iconCls: 'fa fa-building',
                                iconAlign: 'top',
                                id: 'viewport-reporte-modelo-1-a'
                            },{
                                text: 'CURSOS-PERIODOS',
                                iconCls: 'fa fa-life-buoy',
                                iconAlign: 'top',
                                id: 'viewport-reporte-curso'
                            },{
                                text: 'MATRICULAS-PERIODOS',
                                iconCls: 'fa fa-tty',
                                iconAlign: 'top',
                                id: 'viewport-reporte-matricula'
                            },{
                                text: 'SERVICIOS TÉCNICOS REALIZADOS',
                                iconCls: 'fa fa-cutlery',
                                iconAlign: 'top',
                                id: 'viewport-reporte-servicios-tecnicos'
                            },{
                                text: 'LIBRO DE GRADUADOS',
                                iconCls: 'fa fa-graduation-cap',
                                iconAlign: 'top',
                                id: 'viewport-reporte-graduados-o-no'
                            }]
                        },'->',{
                            xtype: 'buttongroup',
                            title: 'Sistema',
                            padding: 5,
                            items: [{
                                text: 'Ayuda',
                                tooltip: 'Ayuda general.',
                                iconCls: 'fa fa-question',
                                iconAlign: 'top',
                                id: 'help3'
                            }, {
                                text: 'Salir',
                                tooltip: 'Salir del sistema. (Logout)',
                                iconCls: 'fa fa-power-off',
                                iconAlign: 'top'
                            }]
                        }]
                    }]
                }]
            },{
                title: '<b>SISTEMA</b>', id: 'others-tab',
                icon: 'resources/images/util.png',
                items: [{
                    xtype: 'panel',
                    id: 'others-tab-panel',
                    border: false,
                    collapsible: true,
                    titleCollapse: true,
                    tools: [{
                        type: 'close',
                        handler: function(){CULINARIA.View.remove();CULINARIA.View.setTitlePanel('others-tab-panel', '');CULINARIA.View.expandPanel('others-tab-panel', this);}
                    }],
                    items: [{
                        xtype: 'toolbar',
                        items: [{
                            xtype: 'buttongroup',
                            title: 'Salvar Base de Datos',
                            padding: 5,
                            items: [{
                                text: 'Guardar',
                                iconCls: 'fa fa-database',
                                iconAlign: 'top',
                                id: 'save-db'
                            }, {
                                text: 'Guardar como',
                                iconCls: 'fa fa-archive',
                                iconAlign: 'top',
                                id: 'save-as-db'
                            }]
                        }, '->', {
                            xtype: 'buttongroup',
                            title: 'Sistema',
                            padding: 5,
                            items: [{
                                text: 'Ayuda',
                                tooltip: 'Ayuda general.',
                                iconCls: 'fa fa-question',
                                iconAlign: 'top',
                                id: 'help4'
                            }, {
                                text: 'Salir',
                                tooltip: 'Salir del sistema. (Logout)',
                                iconCls: 'fa fa-power-off',
                                iconAlign: 'top'
                            }]
                        }]
                    }]
                }]
            }]
        },{
            region: 'center',
            xtype: 'panel',
            border: false,
            bodyStyle: 'background-image:url(resources/images/square.gif);',
            items: [{
                xtype: 'image',
                src: 'resources/images/6.jpg',
                width: '25%'
            },{
                xtype: 'image',
                src: 'resources/images/4.jpg',
                width: '25%'
            },{
                xtype: 'image',
                src: 'resources/images/7.jpg',
                width: '25%'
            },{
                xtype: 'image',
                src: 'resources/images/8.jpg',
                width: '25%'
            }],
            id: 'center-panel-id'
        },{
            region: 'south',
            id: 'south-panel-id',
            items: Ext.create('CULINARIA.view.StatusBarPanel')
        }];
        me.callParent(arguments);
    }
});