
const changeState = {
    requested_material: (state, new_items) => {
        let newState = {
            ...state,
            academic_records: new_items
        }
        return newState
    },
    materials_from_pmu: (state, new_items) => {
        let newState = {
            ...state,
            materials_from_pmu: new_items
        }
        return newState
    }
}

const createUpdateDelete = (params = {}) => {
    switch(params.operation) {
        case 'CREATE':
            let new_items = [...params.items]
            new_items.push(params.data)
            return changeState[params.type](params.state, new_items)
        case 'UPDATE':
            let updated_items = [...params.items]
            updated_items[params.index] = params.data
            return changeState[params.type](params.state, updated_items)
        case 'DELETE':
            let items_after_delete = params.items.filter(item => item.id != data.id)
            return changeState[params.type](params.state, items_after_delete)
    }
}


const UPDATE_MATERIAL = 'material:update'

const createMaterialAction = (action, material, index) => ({
    type: action,
    payload: {
        material: material,
        index: index
    }
})

const updateMaterial = (material, index) => createMaterialAction(UPDATE_MATERIAL, material, index)



// managing materiasl from PMU
const CREATE_MATERALS_FROM_PMU = 'materialsFromPmu:update'

const createMaterialsFromPmuAction = (action, materials_from_pmu) => ({
    type: action,
    payload: {
        materials_from_pmu: materials_from_pmu
    }
})

const createMaterialFromPmu = materials_from_pmu => createMaterialsFromPmuAction(CREATE_MATERALS_FROM_PMU, materials_from_pmu)


const DELETE_REQUESTED_MATERIAL = 'requestedMaterial:delete'
const CREATE_REQUESTED_MATERIAL = 'requestedMaterial:create'
const UPDATE_REQUESTED_MATERIAL = 'requestedMaterial:update'

const requestedMaterialActionsCreator = (material, action, index) => ({
    type: action,
    payload: {
        material: material,
        index: index
    }
})

const deleterequestedMaterial = material => requestedMaterialActionsCreator(material, DELETE_REQUESTED_MATERIAL)
const createrequestedMaterial = material => requestedMaterialActionsCreator(material, CREATE_REQUESTED_MATERIAL)
const updaterequestedMaterial = (material, index) => requestedMaterialActionsCreator(material, UPDATE_REQUESTED_MATERIAL, index)

export const material_reducer = (state = materialState, {
    type,
    payload
}) => {
    switch (type) {
        case UPDATE_MATERIAL:
            let new_materials = [...state.materials]
            new_materials[payload.index] = payload.material
            let newMaterialState = {
                ...state,
                materials: new_materials
            }
            console.log(newMaterialState)
            return newMaterialState
        case CREATE_MATERALS_FROM_PMU:
            return createUpdateDelete({
                operation: 'CREATE',
                state: state,
                data: payload.materials_from_pmu,
                items: state.materials_from_pmu,
                type: 'materials_from_pmu'
            })
        default:
            return state
    }
}

const materialState = {
    materials: [
        {id: 1, name: 'Projector'.toLowerCase(), image: "img/projector.jpg", total: 7},
        {id: 2, name: 'Switch'.toLowerCase(), image: "img/switch.jpg", total: 7},
        {id: 3, name: 'Crimping tool'.toLowerCase(), image: "img/crimping.jpg", total: 7},
        {id: 4, name: 'Cable tester'.toLowerCase(), image: "img/cable_tester.JPG", total: 7}
      ],
    material_for_requesting: [],
    materials_from_pmu: [],
    actions : {
        updateMaterial,
        deleterequestedMaterial,
        updaterequestedMaterial,
        createrequestedMaterial,

        // managin materials from pmu
        createMaterialFromPmu,
    }
}