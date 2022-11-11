<script setup>
import { useQuasar } from 'quasar'
import DeviceRemoveDialog from 'src/components/dialogs/deviceRemoveDialog'
import {
  poweramps,
  removePoweramp,
  changePower
} from 'src/composables/usePoweramps'

const $q = useQuasar()

const changePowerStatus = (args) => {
  $q.loading.show()
  changePower({ ...args })
}

const openDeviceRemoveDialog = (args) => {
  $q.dialog({
    component: DeviceRemoveDialog,
    componentProps: { item: args }
  }).onOk(async (item) => {
    console.log(item)
    $q.loading.show()
    removePoweramp(item)
  })
}
</script>

<template>
  <q-page class="q-pa-md">
    <q-table
      :columns="[
        {
          name: 'id',
          align: 'center',
          label: 'ID',
          field: 'id',
          sortable: true
        },
        {
          name: 'name',
          align: 'center',
          label: 'NAME',
          field: 'name',
          sortable: true
        },
        {
          name: 'status',
          align: 'center',
          label: 'STATUS',
          field: 'status',
          sortable: true
        },
        {
          name: 'actions',
          align: 'center',
          label: 'ACTIONS'
        }
      ]"
      :rows="poweramps"
      row-key="id"
      :pagination="{
        rowsPerPage: 0
      }"
    >
      <template #body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="status" :props="props">
            {{ props.row.status }}
          </q-td>
          <q-td key="actions" :props="props">
            <div class="q-gutter-x-sm row no-wrap justify-center">
              <q-btn
                round
                flat
                size="sm"
                icon="power_settings_new"
                :color="props.row.status ? 'green' : 'red-4'"
                @click="changePowerStatus(props.row)"
              />
              <q-btn
                round
                flat
                size="sm"
                color="red-10"
                icon="delete"
                @click="openDeviceRemoveDialog(props.row)"
              />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>
